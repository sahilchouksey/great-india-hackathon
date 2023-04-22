import { useEffect, useState } from "react";
import axios from "../axios";
export default function useHttp(path, method = "GET", headers = {}, body = {}) {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const makeReq = async () => {
      try {
        setError(null);
        setLoading(true);
        const { data: response } = await axios(path, {
          method,
          headers,
          data: body,
        });

        setData(response);
        setLoading(false);
      } catch (error) {
        12;
        setError(error);
        setLoading(false);
      }
    };
    makeReq();
  }, [path, method]);

  return {
    isLoading,
    error,
    data,
  };
}
