import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const rapidApiKey = process.env.EXPO_PUBLIC_RAPID_API_KEY;

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "x-rapidapi-key": rapidApiKey,
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
    params: {
      ...query,
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      //   console.log(response.data.data);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
