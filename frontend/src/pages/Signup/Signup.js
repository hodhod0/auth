import React, { useState } from "react";
import { useSignup } from "../../hooks/UseSignup";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error ,isLoading} = useSignup();

  const handelSubmit = async (e) => {
    e.preventDefault();

    // console.log(email, password);
    await signup(email, password);
    // setEmail('')
    // setPassword('')

  };
  return (
    <form className="signup" on onSubmit={handelSubmit}>
      <h3>Sign up</h3>

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

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};
