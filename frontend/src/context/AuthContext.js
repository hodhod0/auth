import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        users: action.payload,
      };

    case "LOGOUT":
      return {
        users: null,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(authReducer, {
    users: null,
  });

  console.log('AuthContext state :',  state )

return(
    <AuthContext.Provider value={{...state,dispatch}}>
        { children }
    </AuthContext.Provider>
)

};

