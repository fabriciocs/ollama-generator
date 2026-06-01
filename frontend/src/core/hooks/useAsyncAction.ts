import { useState } from 'react';

export const useAsyncAction = <TArgs extends unknown[], TResult>(
  action: (...args: TArgs) => Promise<TResult>,
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const run = async (...args: TArgs) => {
    setIsLoading(true);
    setError(null);
    try {
      return await action(...args);
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : String(caughtError));
      throw caughtError;
    } finally {
      setIsLoading(false);
    }
  };

  return { run, isLoading, error };
};
