const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const pet = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "name is required"],
      minlength: [3, "Name must be at least 3 characters long."],
    },
    type: {
      type: String,
      required: [true, "Type is required"],
      minlength: [3, "Type must be at least 3 characters long."],
    },
    desc: {
      type: String,
      required: [true, "Description is required"],
      minlength: [3, "Description must be at least 3 characters long."],
    },
    skill_1: { type: String },
    skill_2: { type: String },
    skill_3: { type: String },
    likes: { type: Number },
  },
  { timestamps: true }
);

pet.plugin(uniqueValidator, { message: "{PATH} must be unique." });
module.exports = mongoose.model("Pets", pet);
