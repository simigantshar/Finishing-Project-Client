import axios from "axios";
import { API_URL } from "./apiService";

export default axios.create({
    baseURL: API_URL
});
