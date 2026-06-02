import { useEffect, useRef, useState } from 'react';
import { pollingIntervalMs } from '../../../core/config/constants';
import { logger } from '../../../core/logging/logger';
import {
  DebugResponse,
  GeneratedFileRecord,
  GenerationRecord,
  HealthResponse,
} from '../../../core/types/api.types';
import { generatedFilesApi } from '../../generated-files/services/generated-files.api';
import { debugApi } from '../../debug/services/debug.api';
import { healthApi } from '../../health/services/health.api';
import { generationsApi } from '../../generations/services/generations.api';

export const useLanding = () => {
  const [generation, setGeneration] = useState<GenerationRecord | null>(null);
  const [files, setFiles] = useState<GeneratedFileRecord[]>([]);
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [debug, setDebug] = useState<DebugResponse | null>(null);
  const [pollingPaused, setPollingPaused] = useState(false);
  const generationIdRef = useRef<string | null>(null);

  const refreshSupportData = async () => {
    try {
      const [healthData, debugData] = await Promise.all([healthApi.get(), debugApi.recent()]);
      setHealth(healthData);
      setDebug(debugData);
    } catch (error) {
      setHealth(null);
      setDebug(null);
      logger.warn('support-data:unavailable', {
        error: error instanceof Error ? error.message : String(error),
      });
    }
  };

  const refreshGeneration = async () => {
    if (!generationIdRef.current) {
      return;
    }
    try {
      const next = await generationsApi.get(generationIdRef.current);
      setGeneration(next);
      const nextFiles = await generatedFilesApi.list(generationIdRef.current);
      setFiles(nextFiles);
      setPollingPaused(false);
      logger.debug('generation:poll', { id: generationIdRef.current, status: next.status });
    } catch (error) {
      setPollingPaused(true);
      logger.warn('generation:poll:paused', {
        id: generationIdRef.current,
        error: error instanceof Error ? error.message : String(error),
      });
      throw error;
    }
  };

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      void refreshSupportData();
    }, 0);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    generationIdRef.current = generation?.id ?? null;
  }, [generation?.id]);

  useEffect(() => {
    if (
      !generation?.id ||
      generation.status === 'completed' ||
      generation.status === 'error' ||
      pollingPaused
    ) {
      return;
    }
    const handle = window.setInterval(() => {
      void refreshGeneration().catch(() => undefined);
    }, pollingIntervalMs);
    return () => window.clearInterval(handle);
  }, [generation?.id, generation?.status, pollingPaused]);

  const createGeneration = async (idea: string) => {
    logger.info('generation:create:click', { ideaLength: idea.length });
    const created = await generationsApi.create(idea);
    setPollingPaused(false);
    setGeneration(created);
    setFiles([]);
    await refreshSupportData();
    return created;
  };

  const resumeGeneration = async () => {
    if (!generationIdRef.current) {
      return;
    }
    const next = await generationsApi.resume(generationIdRef.current);
    setPollingPaused(false);
    setGeneration(next);
    const nextFiles = await generatedFilesApi.list(generationIdRef.current);
    setFiles(nextFiles);
    await refreshSupportData();
    return next;
  };

  const retryStep = async (stepId: string) => {
    if (!generationIdRef.current) {
      return;
    }
    const next = await generationsApi.retryStep(generationIdRef.current, stepId);
    setPollingPaused(false);
    setGeneration(next);
    const nextFiles = await generatedFilesApi.list(generationIdRef.current);
    setFiles(nextFiles);
    await refreshSupportData();
    return next;
  };

  const refreshGenerationManually = async () => {
    setPollingPaused(false);
    await refreshGeneration();
  };

  return {
    generation,
    files,
    health,
    debug,
    createGeneration,
    resumeGeneration,
    retryStep,
    refreshGeneration: refreshGenerationManually,
    refreshSupportData,
  };
};
