import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import Alert from "@mui/material/Alert";
import Form from "../components/Form";

const Main = (props) => {
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const initPet = {
    name: "",
    type: "",
    desc: "",
    likes: 0,
    skill_1: "",
    skill_2: "",
    skill_3: "",
  };

  // Create
  const addPet = (pet) => {
    setErrors([]);
    axios
      .post("http://localhost:8000/api/pets", pet)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => {
        let { errors } = err.response.data;
        let errs = [];
        for (let field in errors) {
          errs.push(errors[field].message);
        }
        setErrors(errs);
      });
  };

  return (
    <>
      <div className="text-end">
        <Link to="/">back to home</Link>
      </div>
      <h1 className="text-start mb-3">Pet Shelter</h1>
      <h4 className="text-start mb-5">Know a pet needing a home?</h4>
      {errors.map((err, i) => (
        <Alert variant="outlined" severity="error" key={i} className="mb-2">
          {err}
        </Alert>
      ))}
      <Form init={initPet} onSubmit={addPet} btn={"Add Pet"} />
    </>
  );
};

export default Main;
