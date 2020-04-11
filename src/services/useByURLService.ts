import { useEffect, useState } from 'react';

const useByUrlService = (url: string) => {
  const [result, setResult] = useState({
    status: 'loading',
    payload: null,
  });

  useEffect(() => {
    if (url) {
      setResult({ status: 'loading', payload: null });
      fetch(url)
        .then(response => response.json())
        .then(response => setResult({ status: 'loaded', payload: response }))
        .catch(error => setResult({ status: 'error', payload: error }));
    }
  }, [url]);

  return result;
};

export default useByUrlService;