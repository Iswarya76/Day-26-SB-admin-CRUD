import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers([
      {
        id: 1,
        username: "Person 1",
        email: "person1@gmail.com",
        country: "India",
        state: "Tamilnadu",
        city: "Dindigul",
        phone: "9987654321",
        dob: "16.06.1998",
        gender: "Male",
      },
      {
        id: 2,
        username: "Person 2",
        email: "person2@gmail.com",
        country: "India",
        state: "Tamilnadu",
        city: "Chennai",
        phone: "9987654320",
        dob: "16.04.1999",
        gender: "Female",
      },
    ]);
  }, []);
  return (
    <div className="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-2 text-gray-800">Users</h1>
        <Link
          to={"/user_create"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i>Create User
        </Link>
      </div>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Phone</th>
                  <th>DOB</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Phone</th>
                  <th>DOB</th>
                  <th>Gender</th>
                </tr>
              </tfoot>
              <tbody>
               {users.map((user) => {
                  return (
                    <tr>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.country}</td>
                      <td>{user.state}</td>
                      <td>{user.city}</td>
                      <td>{user.phone}</td>
                      <td>{user.dob}</td>
                      <td>{user.gender}</td>
                      <tr>
                  <td>
                    <Link to={`/users/${user.id}`} className="btn btn-warning mr-2">View</Link>
                  </td>
                </tr>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
