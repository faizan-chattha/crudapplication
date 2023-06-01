import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const navigate = useNavigate();
  const updateSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://647843e1362560649a2d6cc6.mockapi.io/crud/${id}`, {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
        navigate("/");
        alert("Updated Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="bg-primary p-4 text-center">
            <h1> Update User</h1>
          </div>
          <form onSubmit={updateSubmit} className="mt-4">
            <div className="form-group">
              <label> Enter Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label> Enter Age:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Age"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label> Enter Email:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <br />
            <div className="d-grid">
              <input type="submit" value="update" className="btn btn-primary" />
            </div>
          </form>
          <div className="mt-2 mb-2">
            <Link to="/">
              <button>Read Data</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
