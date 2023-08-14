import axios from 'axios';

export const API_URL = "http://localhost:3003";

export const TOKEN_KEY = "products_token";

export const getApi = async(url) => {
    try{
        const {data} = await axios({
            url:url,
            method:"GET",
            headers:{
                "x-api-key":localStorage[TOKEN_KEY]
            }
        })
        return data;
    }
    catch(err){
        throw err;
    }
}

export const getApiMethod = async(url, method, bodyData) => {
    try{
        const {data} = await axios({
            url:url,
            method:method,
            headers:{
                "x-api-key":localStorage[TOKEN_KEY]
            },
            data:bodyData,
        })
        return data;
    }
    catch(err){
        throw err;
    }
}