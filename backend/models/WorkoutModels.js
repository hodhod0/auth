const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    laod: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const admin = mongoose.model("workout", WorkoutSchema);
module.exports = admin;
