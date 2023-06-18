import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function User() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  let fetchData = async () => {
    try {
      setLoading(true);
      const users = await axios.get(
        "https://635fff92ca0fe3c21aaa41e9.mockapi.io/user"
      );
      console.log(users);
      setUsers(users.data);
      setLoading(false);
    } catch (error) {
      alert("Error");
    }
  };
  let deleteUser = async (userId) => {
    try {
      const result = window.confirm("Are you sure do you want to delete?");
      if (result) {
        const deleteUser = await axios.delete(
          `https://635fff92ca0fe3c21aaa41e9.mockapi.io/user/${userId}`
        );
        alert("Deleted successfully");
        fetchData();
      }
    } catch (error) {
      alert("Error in deleting");
    }
  };
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-2 text-gray-800">Users</h1>
        <Link
          to={"/user_create"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i>Create User
        </Link>
      </div>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th>DOB</th>
                    <th>Gender</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th>DOB</th>
                    <th>Gender</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {users.map((user, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.state}</td>
                        <td>{user.city}</td>
                        <td>{user.phone}</td>
                        <td>{user.dob}</td>
                        <td>{user.gender}</td>
                        <tr>
                          <td>
                            <Link
                              to={`/users/${user.id}`}
                              className="btn btn-info mr-2"
                            >
                              View
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={`/edit/${user.id}`}
                              className="btn btn-primary mr-2"
                            >
                              Edit
                            </Link>
                          </td>
                          <button
                            onClick={() => deleteUser(user.id)}
                            className="btn btn-danger mt-1 "
                          >
                            Delete
                          </button>
                        </tr>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;
