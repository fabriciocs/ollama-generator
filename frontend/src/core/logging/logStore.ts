export type FrontendLogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error';

export type FrontendLogEntry = {
  id: string;
  timestamp: string;
  level: FrontendLogLevel;
  message: string;
  context?: Record<string, unknown>;
};

let entries: FrontendLogEntry[] = [];
const listeners = new Set<() => void>();

const emit = () => listeners.forEach((listener) => listener());

export const frontendLogStore = {
  append(entry: Omit<FrontendLogEntry, 'id' | 'timestamp'>) {
    entries = [
      {
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        ...entry,
      },
      ...entries,
    ].slice(0, 200);
    emit();
  },
  clear() {
    entries = [];
    emit();
  },
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  getSnapshot() {
    return entries;
  },
};
