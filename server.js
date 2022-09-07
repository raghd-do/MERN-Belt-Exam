// Setup
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
app.use(express.json(), express.urlencoded({ extended: true }), cors());

// DB fire
require("./server/config/mongoose.config");

// Link routes
const pet = require("./server/routes/pets.routes");
pet(app);

// App fire
const server = app.listen(port, () => {
  console.log(`Server fired on ${port}`);
});

// IO
const io = require("socket.io")(server, { cors: true });

io.on("connection", (socket) => {
  socket.on("Liking_pet", (data) => {
    console.log("I reseved: ", data);
    io.emit("adopted ", data);
  });
});
