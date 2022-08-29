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

router.get("/:id", (req, res) => {
  res.send("its good by id");
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
});


//  to get edit a workout
router.patch("/:id",updateWorkout);

//  to get delete a workout
router.delete("/:id", deleteWorkout);

module.exports = router;
