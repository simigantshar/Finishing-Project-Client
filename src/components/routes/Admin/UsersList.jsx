import React, { useEffect, useState } from "react";
import { getApi } from "../../../services/apiService";

const UsersList = () => {
  const [usersList, setUsersList] = useState([]);

  const getData = async () => {
    const data = await getApi("/users/usersList");
    setUsersList(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="m-20">
        <table className="w-full">
          <tr className="border border-black rounded-t-full">
            <th className="text-start p-1">#</th>
            <th className="text-start p-1">Name:</th>
            <th className="text-start p-1">Email:</th>
            <th className="text-start p-1">Role:</th>
            <th></th>
            <th></th>
          </tr>
          {usersList.map((item,i) => (
            <tr key={i} className="border border-black">
              <td className="p-1 font-semibold">{i + 1}.</td>
              <td className="p-1">{item.name}</td>
              <td className="p-1">{item.email}</td>
              <td className="p-1">{item.role}</td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default UsersList;
