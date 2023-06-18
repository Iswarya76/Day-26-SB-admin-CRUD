import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

function UserCreate() {
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      state: "",
      city: "",
      gender: "",
      phone: "",
      dob: "",
    },
    validate: (values) => {
        let error = {};
  
        if (!values.name) {
          error.name = "Please enter your name";
        }
  
        if (values.name && (values.name.length <= 4 || values.name.length > 15)) {
          error.name = "Username must be between 5 to 20 characters";
        }
  
        if (!values.email) {
          error.email = "Please enter your email";
        }
  
        if (
          values.email &&
          !/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          error.email = "Please enter a valid email";
        }
  
        if (values.phone.toString().length !== 10) {
          error.phone = "Phone number is invalid";
        }
  
        let age = new Date().getFullYear() - parseInt(values.dob.split("-")[0]);
        console.log(age);
  
        if (age < 18) {
          error.dob = "You must be under 18";
        }
        return error;
      },

    onSubmit: async (values) => {
      try {
        const user = await axios.post(
          "https://635fff92ca0fe3c21aaa41e9.mockapi.io/user",values
        );

        alert("User created successfully");
        navigate("/users");
      } catch (error) {
        alert("Error");
      }
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>User Name*</label>
              <input
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                type={"text"}
                className={`form-control ${
                    formik.errors.name ? "error-box" : ""
                  }${
                    formik.touched.name && !formik.errors.name
                      ? "success-box"
                      : ""
                  }`}
              ></input>
               {formik.errors.name ? (
                <span style={{ color: "red" }}>{formik.errors.name}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Email*</label>
              <input
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                type={"email"}
                className={`form-control ${
                    formik.touched.email && formik.errors.email ? "error-box" : ""
                  }${
                    formik.touched.email && !formik.errors.email
                      ? "success-box"
                      : ""
                  }`}
              ></input>
               {formik.touched.email && formik.errors.email ? (
                <span style={{ color: "red" }}>{formik.errors.email}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>State</label>
              <select name="state"
                onChange={formik.handleChange}
                value={formik.values.state} className="form-control">
                    <option>---</option>
                <option>Tamilnadu</option>
                <option>Andhra Pradesh</option>
                <option>Kerala</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>City</label>
              <select  name="city"
                onChange={formik.handleChange}
                value={formik.values.city}className="form-control">
                    <option>---</option>
                <option>Chennai</option>
                <option>Hyderabad </option>
                <option>Kochin</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Phone</label>
              <input name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone} type={"number"} className={`form-control ${
                    formik.errors.phone ? "error-box" : ""
                  }${
                    formik.touched.phone && !formik.errors.phone
                      ? "success-box"
                      : ""
                  }`}></input>
                  {formik.touched.phone && formik.errors.phone ? (
                <span style={{ color: "red" }}>{formik.errors.phone}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Date of Birth</label>
              <input name="dob"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob} type={"date"} className={`form-control ${
                    formik.errors.dob ? "error-box" : ""
                  }${
                    formik.touched.dob && !formik.errors.dob ? "success-box" : ""
                  }`}></input>
                  {formik.touched.dob && formik.errors.dob ? (
                <span style={{ color: "red" }}>{formik.errors.dob}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Gender</label>
              <select  name="gender"
                onChange={formik.handleChange}
                value={formik.values.gender} className="form-control">
                    <option>---</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <input type={"submit"} className="btn btn-primary"></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserCreate;
