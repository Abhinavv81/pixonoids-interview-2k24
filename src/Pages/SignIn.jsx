import React, { useState, useEffect } from "react";
import { useAuth } from "../Context/useAuthContext";
import Register from "./Register";
import RegistredUer from "./RegistredUer";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import Loader from "../Components/Loader";
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
            className="py-6 max-h-[70vh] md:mx-auto sm:px-5"
          />
          <div className="w-100vw flex justify-center items-center  m-5 ml-9 flex-col gap-2">
            <div className="flex justify-center items-center text-xl lg:text-2xl font-semibold">
              FOR ANY QUERIES, PLEASE REACH OUT TO :
            </div>
            <div className="flex  items-center lg:gap-60 mt-6 text-base\">
              <div className="flex flex-col gap-2">
                <span>Rahul Prasad : 7807592676</span>
                <span>Anurag Negi : 8219132773</span>
              </div>
              <div className="flex flex-col gap-2">
                <span>Vani Chauhan : 9990054291</span>
                <span>Tanmay sharma : 8448608491</span>
              </div>
            </div>
          </div>
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
    return <Loader />;
  } else {
    if (userExists) {
      return <RegistredUer />;
    } else {
      return <Register />;
    }
  }
};
