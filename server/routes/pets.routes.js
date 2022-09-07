const pet = require("../controllers/pets.controller");

module.exports = (app) => {
  app.get("/api/pets", pet.all);
  app.get("/api/pets/:id", pet.one);
  app.post("/api/pets", pet.add);
  app.put("/api/pets/:id", pet.update);
  app.delete("/api/pets/:id", pet.delete);
  app.patch("/api/pets/:id", pet.increase);
};
