const express = require("express");
const app = require("../app");
const router = express.Router();
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require("../controllers/WorkoutControllers");

//  to get all workout
router.get("/", getWorkouts);

//  to get singl workout
router.get("/:id", getWorkout);

//  to post  a new workout
router.post("/", createWorkout);

//  to get edit a workout
router.patch("/:id",updateWorkout);

//  to get delete a workout
router.delete("/:id", deleteWorkout);

module.exports = router;
