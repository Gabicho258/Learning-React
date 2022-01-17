import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const AboutPage = () => {
  const { user, setUser } = useContext(UserContext);
  const handleClick = () => {
    setUser({});
  };
  return (
    <div>
      <h1>About Page</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button class="btn btn-warning" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};
