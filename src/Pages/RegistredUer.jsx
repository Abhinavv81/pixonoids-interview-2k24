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
            JOIN WHATSAPP GROUP
          </button>
        </a>
        <Link to={"/"}>
          <button className=" mt-4 flex gap-2 mx-auto text-n-3">
            <MoveLeft />
            GO BACK HOME
          </button>
        </Link>

        <img
          src={"/poster.jpeg"}
          alt={"Poster"}
          className="py-6 max-h-[70vh] mx-auto"
        />
        <div className="w-100vw flex justify-center items-center  m-5 ml-9 flex-col gap-2">
          <div className="flex justify-center items-center text-xl lg:text-2xl font-semibold">
            FOR ANY QUERIES, PLEASE REACH OUT TO :
          </div>
          <div className="flex  items-center lg:gap-60 mt-6 text-base\">
            <div className="flex flex-col gap-2">
              <span>RAHUL PRASAD : 7807592676</span>
              <span>ANURAG NEGI : 8219132773</span>
            </div>
            <div className="flex flex-col gap-2">
              <span>VANI CHAUHAN : 9990054291</span>
              <span>TANMAY SHARMA : 8448608491</span>
            </div>
          </div>
        </div>

        <span className="mx-auto w-full mt-11 flex justify-center items-center">
          <button className="btn" onClick={signOutUser}>
            SIGN OUT
          </button>
        </span>
      </div>
    </div>
  );
};

export default RegistredUer;
