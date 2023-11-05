import React, { useEffect } from 'react'
import { getApi } from '../../../services/apiService';
import { useNavigate } from 'react-router-dom';

const AuthAdminComp = () => {

    const nav = useNavigate();

    useEffect(() => {
      doApi();
    }, [])

    const doApi = async() => {
        try {
            const url = "/users/checkToken";
            const data = await getApi(url);
            console.log(data)
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