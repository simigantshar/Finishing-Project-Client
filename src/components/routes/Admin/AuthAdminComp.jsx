import React, { useEffect } from 'react'
import { API_URL, getApi } from '../../../apiService';
import { useNavigate } from 'react-router-dom';

const AuthAdminComp = () => {

    const nav = useNavigate();

    useEffect(() => {
      doApi();
    }, [])

    const doApi = async() => {
        try {
            const url = API_URL + "/users/checkToken";
            const data = await getApi(url);
            if(data.role != "superadmin" && data.role != "admin"){
            alert("You must be admin to access this area");
            nav("/login")
        }
        } catch (error) {
            alert("Session expired. Please log back in to continue!");
            nav("/login")
        }
    }

  return (
    <React.Fragment>

    </React.Fragment>
  )
}

export default AuthAdminComp