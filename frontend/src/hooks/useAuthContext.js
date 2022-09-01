// import { WorkoutsContext } from "../context/WorkoutContext";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useWorkoutsContext =()=>{
    const context = useContext(AuthContext)
    if(!context) {
        throw Error("useAuthContext must be used  inside an AuthContextProvider")
    }

    return context
}