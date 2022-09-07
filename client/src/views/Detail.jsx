import React, { useState, useEffect } from "react";
import axios from "axios";
import io from "socket.io-client";
import { useParams, Link, useHistory } from "react-router-dom";

import Show from "../components/Show";
import DeleteBtn from "../components/DeleteBtn";
import HomeIcon from "@mui/icons-material/Home";

const socket = io(":8000");

const Detail = (props) => {
  const { id } = useParams();
  const [pet, setPet] = useState({});
  const [liked, setLiked] = useState(false);
  const history = useHistory();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("D connected");
    });

    socket.on("disconnect", () => {
      console.log("D disconnected");
    });

    console.log("Datail in");

    socket.on("adopted", (data) => {
      console.log("am I here ?");
      console.log(data);
    });

    return () => {
      socket.disconnect(true);
    };
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pets/${id}`)
      .then((res) => {
        setPet(res.data);
      })
      .catch((err) => console.log(err));
  }, [id, liked]);

  const like = (id) => {
    setLiked(false);

    socket.emit("Liking_pet", pet._id);

    axios
      .patch(`http://localhost:8000/api/pets/${id}`)
      .then((res) => setLiked(true))
      .catch((err) => console.log(err));
  };

  const goHome = () => {
    history.push("/");
  };

  return (
    <>
      <div className="text-end">
        <Link to="/">back to home</Link>
      </div>
      <h1 className="text-start mb-3">Pet Shelter</h1>
      <div className="row mb-5">
        <h4 className="text-start col">Details about: {pet.name}</h4>
        <DeleteBtn id={pet._id} onDelete={goHome} icon={<HomeIcon />}>
          Adopt {pet.name}
        </DeleteBtn>
      </div>
      <Show item={pet} like={like} />
    </>
  );
};

export default Detail;
