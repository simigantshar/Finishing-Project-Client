import axios from "axios";
import { config } from "../../config/secret";

export const API_URL = config.WEBSITE_URL

export const TOKEN_KEY = "products_token";

export const TOKEN_SECRET = config.TOKEN_SECRET;

export const getApi = async (url) => {
  try {
    const { data } = await axios({
      url: API_URL + url,
      method: "GET",
      headers: {
        [TOKEN_SECRET]: localStorage[TOKEN_KEY],
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};

export const getApiMethod = async (url, method, bodyData) => {
  try {
    const { data } = await axios({
      url: API_URL + url,
      method: method,
      data: bodyData,
      headers: {
        [TOKEN_SECRET]: localStorage[TOKEN_KEY],
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};
