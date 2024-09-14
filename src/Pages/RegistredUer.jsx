import React from "react";
import { useAuth } from "../Context/useAuthContext";
import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";
const RegistredUer = () => {
  const { user, signOutUser } = useAuth();
  return (
    <div>
      <div className="mt-11">
        <p className="h3 w-full text-center">Welcome, {user.displayName}</p>
        <p className="text-n-3 text-xl text-center">
          You are registered with the email: {user.email}.
        </p>
        <br />

        <a href="https://chat.whatsapp.com/HcxJ3JHJ8tK4H7FaF2auId">
          <button className="btn flex gap-2 mx-auto justify-center items-center">
            <img
              src="/whatsapp.png"
              alt="whatsapp"
              className="w-8  inline-block"
            />
            Join whatsapp group
          </button>
        </a>
        <Link to={"/"}>
          <button className=" mt-4 flex gap-2 mx-auto text-n-3">
            <MoveLeft />
            Go back to home
          </button>
        </Link>

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
