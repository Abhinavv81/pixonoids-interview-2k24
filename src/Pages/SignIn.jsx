import React from "react";
import { useAuth } from "../Context/useAuthContext";
import Register from "./Register";
const SignIn = () => {
  const { user, signIn, signOutUser } = useAuth();
  if (user) {
    return <Register />;
  }
  return (
    <div>
      {" "}
      <h1>Firebase Authentication with useContext</h1>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={signOutUser}>Sign Out</button>
        </div>
      ) : (
        <button onClick={signIn}>Sign In with Google</button>
      )}
    </div>
  );
};

export default SignIn;
