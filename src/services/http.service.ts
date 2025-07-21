// src/services/http.service.ts
import { useState, useCallback } from 'react';

// interface HttpRequestConfig {
//   headers?: Record<string, string>;
//   params?: Record<string, string>;
// }

export function useHttp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<unknown>(null);

  const request = useCallback(
    async <T>(url: string, method: string = 'GET', body: any = null, headers: Record<string, string> = {}): Promise<T> => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          method,
          body: body ? JSON.stringify(body) : null,
          headers: {
            'Content-Type': 'application/json',
            ...headers
          }
        });

        const data = await response.json() as T;
        setData(data);
        setLoading(false);
        return data;
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
        throw err;
      }
    },
    []
  );

  const get = <T>(url: string) => request<T>(url);

  return {
    loading,
    error,
    data,
    get
  };
}