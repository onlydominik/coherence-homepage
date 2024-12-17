import { useCallback, useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetching = useCallback(async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        setError(`Error occurred: ${response.status}`);
        throw new Error(error);
      }

      const fetchData = await response.json();
      setData(fetchData);
    } catch (errorMsg) {
      setError(`Rejected: ${errorMsg}`);
      console.error(`Rejected: ${errorMsg}`);
    } finally {
      setIsLoading(false);
    }
  }, [url, error]);

  useEffect(() => {
    fetching();
  }, [url, fetching]);

  return { isLoading, data, error };
}

export default useFetch;
