const Pet = require("../models/pets.model");

module.exports.all = (req, res) => {
  Pet.find()
    .then((pets) => res.json(pets))
    .catch((err) => res.json(err));
};

module.exports.one = (req, res) => {
  Pet.findOne({ _id: req.params.id })
    .then((one) => res.json(one))
    .catch((err) =>
      res.status(404).json({
        message: "we couldn't find the Pet you are looking",
      })
    );
};

module.exports.add = (req, res) => {
  Pet.create(req.body)
    .then((newP) => {
      res.json(newP);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.update = (req, res) => {
  Pet.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
    context: "query",
  })
    .then((updated) => res.json(updated))
    .catch((err) => res.status(400).json({ Error: err }));
};

module.exports.delete = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};

module.exports.increase = (req, res) => {
  Pet.updateOne({ _id: req.params.id }, { $inc: { likes: 1 } })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};
