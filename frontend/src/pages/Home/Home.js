import React, { useEffect } from "react";
import WorkoutDetails from "../../components/workoutDetails/WorkoutDetails";
import WorkoutForm from "../../components/workoutForm/WorkoutForm";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";
import {useAuthContext} from "../../hooks/useAuthContext"

function Home() {
    // const [workouts,setWorkouts] = useState(null)
    const {workouts,dispatch}=useWorkoutsContext()
    const {user} = useAuthContext()

    useEffect(()=>{
       const fetchWorkouts = async () =>{
        const response = await fetch("/api/workout",{
          headers:{
            'Authorization':`Bearer ${user.token}`
          }
        })
        console.log(response)
        const json = await response.json()
        if(response.ok){
            // setWorkouts(json)
            dispatch({type:"SET_WORKOUTS",payload:json})

        }

       } 
       if(user){

         fetchWorkouts()
       }
    },[dispatch, user])
  return (
    <div className="home">
        <div className="workouts">
        {workouts && workouts.map((workout)=>(
            <WorkoutDetails key={workout._id} workout={workout}/>
        ))}
        
        </div>
        <WorkoutForm/>
    </div>
  );
}

export default Home;
