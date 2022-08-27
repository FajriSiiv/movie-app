import React, { useEffect, useState } from "react";

export const useHook = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const hasilData = await fetch(url).then((res) => res.json());
        setLoading(false);
        setData(hasilData);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, []);

  return { data, error, loading };
};
