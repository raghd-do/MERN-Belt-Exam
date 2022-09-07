import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

import Alert from "@mui/material/Alert";
import Form from "../components/Form";

const UpdatePet = (props) => {
  const { id } = useParams();
  const [pet, setPet] = useState({
    name: "",
    type: "",
    desc: "",
    skill_1: "",
    skill_2: "",
    skill_3: "",
  });
  const [errors, setErrors] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Read
  useEffect(() => {
    setLoaded(false);
    axios
      .get(`http://localhost:8000/api/pets/${id}`)
      .then((res) => {
        setPet(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, updated]);

  // Update
  const update = (pet) => {
    setUpdated(false);
    setErrors([]);
    axios
      .put(`http://localhost:8000/api/pets/${id}`, pet)
      .then((res) => {
        setUpdated(true);
      })
      .catch((err) => {
        console.log(err);
        let { errors } = err.response.data.Error;
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
      <h4 className="text-start mb-5">Edit {pet.name}</h4>
      {errors.map((err, i) => (
        <Alert variant="outlined" severity="error" key={i} className="mb-2">
          {err}
        </Alert>
      ))}
      {loaded && <Form init={pet} onSubmit={update} btn={"Edit Pet"} />}
    </>
  );
};

export default UpdatePet;
