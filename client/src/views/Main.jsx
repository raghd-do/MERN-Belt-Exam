import React, { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import { Link } from "react-router-dom";

import TableShow from "../components/Table";

const socket = io(":8000");

const Main = (props) => {
  // const [id, setId] = useState("edfv");
  const [pets, setPets] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Main connected");
    });

    socket.on("disconnect", () => {
      console.log("Main disconnected");
    });

    console.log(socket);

    socket.on("adopted", (data) => {
      console.log("am I here ?");
      console.log(data);
    });

    return () => {
      socket.disconnect(true);
    };
  }, []);

  // Read
  useEffect(() => {
    setLoaded(false);

    axios
      .get("http://localhost:8000/api/pets")
      .then((res) => {
        let data = res.data;
        let sorted = data.sort((a, b) => {
          if (a.type < b.type) {
            return -1;
          } else {
            return 1;
          }
        });
        setPets(sorted);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="text-end">
        <Link to="/pets/new">add a pet to the shelter</Link>
      </div>
      {/* {id} */}
      <h1 className="text-start mb-3">Pet Shelter</h1>
      <h4 className="text-start mb-5">
        These pets are looking for a good home
      </h4>
      {loaded && <TableShow items={pets} setItems={setPets} />}
    </>
  );
};

export default Main;
