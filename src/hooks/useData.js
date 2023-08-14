import { useEffect, useState } from "react";
import axios from 'axios';
import { API_URL } from "../services/apiService";

const useData = async(endPoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    const url = API_URL + endPoint;
    setIsLoading(true)
    const { mainData } = await axios(url);
    setIsLoading(false);
    setData(mainData);
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, setData, isLoading};
};

export default useData;