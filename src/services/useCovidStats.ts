import { useState, useEffect } from 'react';

const useStats = (url: string) => {
    const [stats, setStats] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchData() {
          setLoading(true);
          setError(null);
          console.log('Fetching Data');
          const data = await fetch(url)
            .then(res => res.json())
            .catch(err => {
              setError(err);
            });
          setStats(data);
          setLoading(false);
        }
        fetchData();
      }, [url]);
      return {
        stats,
        loading,
        error,
      };
};

export default useStats;