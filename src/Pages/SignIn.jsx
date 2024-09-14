import React from "react";
import { useAuth } from "../Context/useAuthContext";
import Register from "./Register";
import RegistredUer from "./RegistredUer";
const SignIn = () => {
  const { user, signIn, signOutUser } = useAuth();

  if (user) {
    // if (!loading && userExists) {
    //   return <RegistredUer />;
    // }
    return <Register />;
  }
  return (
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
  );
};

export default SignIn;
