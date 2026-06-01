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
  const generationIdRef = useRef<string | null>(null);

  const refreshSupportData = async () => {
    const [healthData, debugData] = await Promise.all([healthApi.get(), debugApi.recent()]);
    setHealth(healthData);
    setDebug(debugData);
  };

  const refreshGeneration = async () => {
    if (!generationIdRef.current) {
      return;
    }
    const next = await generationsApi.get(generationIdRef.current);
    setGeneration(next);
    const nextFiles = await generatedFilesApi.list(generationIdRef.current);
    setFiles(nextFiles);
    logger.debug('generation:poll', { id: generationIdRef.current, status: next.status });
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
    if (!generation?.id || generation.status === 'completed' || generation.status === 'error') {
      return;
    }
    const handle = window.setInterval(() => {
      void refreshGeneration();
    }, pollingIntervalMs);
    return () => window.clearInterval(handle);
  }, [generation?.id, generation?.status]);

  const createGeneration = async (idea: string) => {
    logger.info('generation:create:click', { ideaLength: idea.length });
    const created = await generationsApi.create(idea);
    setGeneration(created);
    setFiles([]);
    await refreshSupportData();
    return created;
  };

  return {
    generation,
    files,
    health,
    debug,
    createGeneration,
    refreshGeneration,
    refreshSupportData,
  };
};
