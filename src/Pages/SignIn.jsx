import React from "react";
import { useAuth } from "../Context/useAuthContext";
import Register from "./Register";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import RegistredUer from "./RegistredUer";
const SignIn = () => {
  const { user, signIn, signOutUser } = useAuth();
  if (user && checkEmail(user.email)) {
    return <RegistredUer />;
  }

  if (user) {
    return <Register />;
  }
  return (
    <div>
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

const checkEmail = async (email) => {
  const q = query(collection(db, "users"), where("userEmail", "==", email));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
  return querySnapshot.size > 0;
};
