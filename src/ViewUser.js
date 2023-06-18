import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewUser() {
  const params = useParams();
  const [users, setUsers] = useState(false);
  const [isLoading,setLoading]=useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  let fetchData = async () => {
    try {
      setLoading(true)
      let users = await axios.get(
        `https://635fff92ca0fe3c21aaa41e9.mockapi.io/user/${params.id}`
      );
      setUsers(users.data);
      setLoading(false)
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <div className="container">
      <div className="row p-5">
        <div>
          <h5>Id:{users.id}</h5>
        </div>
        <div className="col-lg-6">
          <h5>Username: {users.name}</h5>
        </div>
        <div className="col-lg-6">
          <h5>Email: {users.email}</h5>
        </div>
        <div className="col-lg-6">
          <h5>State: {users.state}</h5>
        </div>
        <div className="col-lg-6">
          <h5>City: {users.city}</h5>
        </div>
        <div className="col-lg-6">
          <h5>Phone: {users.phone}</h5>
        </div>
        <div className="col-lg-6">
          <h5>DOB: {users.dob}</h5>
        </div>
        <div className="col-lg-6">
          <h5>Gender: {users.gender}</h5>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;
