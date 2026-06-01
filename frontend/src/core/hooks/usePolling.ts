import { useEffect } from 'react';

export const usePolling = (callback: () => void, intervalMs: number, enabled = true) => {
  useEffect(() => {
    if (!enabled) {
      return;
    }
    callback();
    const handle = window.setInterval(callback, intervalMs);
    return () => window.clearInterval(handle);
  }, [callback, enabled, intervalMs]);
};
