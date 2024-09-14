import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-center items-center h-full min-h-[80vh]">
      <div className="flex-1 text-center">
        <div className="rounded-xl bg-[#B1B1B154] text-[#F8E5CF] py-11 h-full">
          <h1 className="h1 w-full">FRESHMAN</h1>
          <h2 className="h3">INTERVIEWS 2K24</h2>
          <p>
            Welcome! We're excited to have you here. We look <br />
            forward to seeing you at the upcoming interviews. <br />
            Best of luck!
          </p>
          <Link to="/register">
            <button className="btn my-4">Start your application</button>
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <img
          src={"/poster.jpeg"}
          alt={"Poster"}
          className="max-h-[70vh] mx-auto"
        />
      </div>
    </div>
  );
};

export default Home;
