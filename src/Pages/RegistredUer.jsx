import React from "react";
import { useAuth } from "../Context/useAuthContext";
const RegistredUer = () => {
  const { user, signOutUser } = useAuth();
  return (
    <div>
      <div className="mt-11">
        <p className="h3 w-full text-center">Welcome, {user.displayName}</p>
        <p className="text-n-3 text-xl text-center">
          You are already registered with the email: {user.email}.
        </p>
        <br />
        <img src={"/poster.jpeg"} alt={"Poster"} className="py-6" />
        <span>
          For any questions, please reach out to: <br />• Rahul Prasad:
          7807592676 <br />• Anurag Negi: 8219132773 <br />• Vani
          Chauhan:9990054291 <br />
          •Tanmay sharma :8448608491
        </span>
        <br />

        <span className="mx-auto w-full mt-11 flex justify-center items-center">
          <button className="btn" onClick={signOutUser}>
            Sign Out
          </button>
        </span>
      </div>
    </div>
  );
};

export default RegistredUer;
