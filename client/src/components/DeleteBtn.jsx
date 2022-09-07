import React from "react";
import axios from "axios";

import Button from "@mui/material/Button";

const DeleteBtn = (props) => {
  const { id, onDelete, icon } = props;

  const hundleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/pets/${id}`)
      .then((res) => {
        onDelete(id);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Button
      variant="contained"
      color="error"
      startIcon={icon}
      onClick={(e) => hundleDelete(id)}
      className="col-auto mx-2 btn btn-outline-danger"
    >
      {props.children}
    </Button>
  );
};

export default DeleteBtn;
