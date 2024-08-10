import { useEffect, useState } from "react";

const GetInfo = (link) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState(true);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetch(link);
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          setError("Code 1022" + response.statusText);
        }
      } catch (error) {
        setError("Code 1023" + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchInfo();
  }, [link]);

  return { data, error, loading };
};

export default GetInfo;
