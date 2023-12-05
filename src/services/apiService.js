import axios from "axios";

export const API_URL = "http://localhost:3003";

export const TOKEN_KEY = "products_token";

export const TOKEN_SECRET = "x-api-key";

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
