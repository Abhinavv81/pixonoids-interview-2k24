import { MoveLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Done = () => {
  return (
    <div className=" w-full flex flex-col justify-center items-center">
      <div className="text-center mt-5">
        <h1 className="h3">Thank You For Registering!</h1>
        <p className="h6">SEE YOU AT F1 5:00 PM ON 17th SEPTEMBER 2024</p>
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
            GO BACK TO HOME
          </button>
        </Link>
        <br />
        <br />
        <span className="pt-3 text-n-3 text-center">
          JOIN THE WHATSAPP GROUP TO STAY UPDATED WITH THE LATEST INFORMATION.
        </span>
        <img
          src={"/poster.jpeg"}
          alt={"Poster"}
          className="py-6 max-h-[70vh] mx-auto"
        />
      </div>
    </div>
  );
};

export default Done;
