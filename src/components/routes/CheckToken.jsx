import React, { useEffect } from "react";
import { TOKEN_KEY, getApi } from "../../services/apiService";
import { useNavigate } from "react-router-dom";

const CheckToken = () => {

    const nav = useNavigate();

  const getToken = async () => {
    try {
      const resp = await getApi("/users/checkToken");
      console.log(resp);
    } catch (error) {
        if(error.response.data && localStorage[TOKEN_KEY]){
            console.log(error.response.data);
            // localStorage.removeItem(TOKEN_KEY);
            localStorage.clear();
            alert("Session expired!\nLogging you out!");
            nav("/");
            // window.location.href = "/";
        }
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return <div></div>;
};

export default CheckToken;
