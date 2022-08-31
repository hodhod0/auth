import React from "react";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";
import  formatDistanceToNow  from 'date-fns/formatDistanceToNow'
function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext();

  const handelClick = async () => {
    const response = await fetch("/api/workout/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load:</strong> {workout.load}
      </p>

      <p>
        <strong>Reps:</strong> {workout.reps}
      </p>
      <p>{formatDistanceToNow(new Date (workout.createdAt))}</p>
      <span className="material-symbols-outlined" onClick={handelClick}>delete</span>
    </div>
  );
}

export default WorkoutDetails;
