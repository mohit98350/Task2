import FormData from "./FormData";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Details = () => {
  const [users, setUsers] = useState(null);

  const fetchUsers = async () => {
    const data = await axios.get("http://localhost:7000/api/user/");
    setUsers(data.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <div className="user-data">User Details</div>
      <div className="user-list">
        {users &&
          users.map((user) => {
            return <FormData user={user} />;
          })}
      </div>
    </div>
  );
};

export default Details;
