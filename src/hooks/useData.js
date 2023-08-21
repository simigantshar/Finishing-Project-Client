import axios from "axios";
import { API_URL } from "../services/apiService";

export const useData = async (endPoint) => {
  const url = API_URL + endPoint;
  const { data } = await axios(url);
  return data;
};