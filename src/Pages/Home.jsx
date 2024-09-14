import React from "react";
import { useAuth } from "../Context/useAuthContext";

const Home = () => {
  const { user, signIn, signOutUser } = useAuth();
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

export default Home;
