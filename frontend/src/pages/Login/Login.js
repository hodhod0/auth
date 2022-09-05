import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login , error , isLoading} = useLogin()
  const handelSubmit = async (e) => {
    e.preventDefault();

    // console.log(email , password);
    await login(email , password)
  };

  return (
    <form className="login" on onSubmit={handelSubmit}>
      <h3>Log In </h3>

      <label>Email :</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password :</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button disabled={isLoading} onClick={''}>Log In</button>
      {error && <div className="error"> {error} </div>}
    </form>
  );
};
