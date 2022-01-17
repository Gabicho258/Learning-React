import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  const user = {
    id: 123,
    name: "Gabo",
  };
  return (
    <div>
      <h1>Login Page</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => setUser(user)}>
        Login
      </button>
    </div>
  );
};
