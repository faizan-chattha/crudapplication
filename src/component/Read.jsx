import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);

  function getData() {
    axios
      .get("https://647843e1362560649a2d6cc6.mockapi.io/crud")
      .then((response) => {
        setApiData(response.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://647843e1362560649a2d6cc6.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  function setDataToStorage(id, name, email, age) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("age", age);
  }

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="mt-2 mb-2">
            <Link to="/create">
              <button>Create Data</button>
            </Link>
          </div>
          <table className="table table-bordered table-stripes table-dark table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.e_name}</td>
                    <td>{item.e_age}</td>
                    <td>{item.e_email}</td>
                    <td>
                      <Link to={"/edit"}>
                        <button
                          onClick={() =>
                            setDataToStorage(
                              item.id,
                              item.e_name,
                              item.e_email,
                              item.e_age
                            )
                          }
                          className="btn btn-primary"
                        >
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you wish to delete this item?"
                            )
                          )
                            handleDelete(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Read;
