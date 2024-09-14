import React, { useState, useEffect } from "react";
import { useAuth } from "../Context/useAuthContext";
import Register from "./Register";
import RegistredUer from "./RegistredUer";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
const SignIn = () => {
  const { user, signIn, signOutUser } = useAuth();

  if (user) {
    return <UserLoggedIn />;
  }
  return (
    <>
      <div>
        <div className="mt-11">
          {user ? (
            <div>
              <p>Welcome, {user.displayName}</p>
              <button onClick={signOutUser}>Sign Out</button>
            </div>
          ) : (
            <div className="">
              <span className="">
                <p className="h3 w-full text-center">Join Pixonoids</p>
                <p className="text-n-3 text-xl text-center">
                  Please sign in with your Google account to register for the
                  interviews.
                </p>
              </span>
              <div className="flex justify-center items-center">
                <button onClick={signIn} className="btn my-6">
                  Sign In with Google
                </button>
              </div>
            </div>
          )}
          <br />
          <img
            src={"/poster.jpeg"}
            alt={"Poster"}
            className="py-6 max-h-[70vh] mx-auto"
          />
          <span>
            For any questions, please reach out to: <br />• Rahul Prasad:
            7807592676 <br />• Anurag Negi: 8219132773 <br />• Vani
            Chauhan:9990054291 <br />
            •Tanmay sharma :8448608491
          </span>
        </div>
      </div>
    </>
  );
};

export default SignIn;

const UserLoggedIn = () => {
  const [loading, setLoading] = useState(true);
  const [userExists, setUserExists] = useState(false);

  const checkEmail = async () => {
    const { user } = await useAuth();

    const dataRef = collection(db, "pixonoids-freshman-2k24");

    const q = query(dataRef, where("userEmail", "==", user.email));

    const querySnapshot = await getDocs(q);
    const userExists = querySnapshot.docs.length > 0;
    setUserExists(userExists);

    setLoading(false);
    return userExists;
  };
  checkEmail();

  if (loading) {
    return (
      <>
        <div className="h-screen w-full flex justify-center items-center">
          <div className="text-center ">
            <h1 className="h3">Loading...</h1>
          </div>
        </div>
      </>
    );
  } else {
    if (userExists) {
      return <RegistredUer />;
    } else {
      return <Register />;
    }
  }
};
