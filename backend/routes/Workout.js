const express = require("express");
const app = require("../app");
const router = express.Router();
const Workout = require("../models/WorkoutModels");

//  to get all workout
router.get("/", (req, res) => {
  res.send("its good");
});

//  to get singl workout
router.get("/:id", (req, res) => {
  res.send("its good");
});

//  to post  a new workout
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({title, reps, load});
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})

  }
  res.send("its good");
});

//  to get edit a workout
router.patch("/:id", (req, res) => {
  res.send("its good");
});

//  to get delete a workout
router.delete("/:id", (req, res) => {
  res.send("its good");
});

module.exports = router;
