import { div, image } from "framer-motion/client";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const dept = [
    {
      name: "Pre Production",
      description:
        "Pre-Production Department is responsible for the planning and preparation of the film before the actual production begins. It is the first stage in the production process.",
      image: "/g1.jpg",
    },
    {
      name: " Post Production",
      description:
        "Post-production is part of the process of filmmaking, video production, and photography. It occurs in the making of motion pictures, television programs, radio programs, advertising, audio recordings, photography, and digital art.",
      image: "/afduRwzNNfw-HD.jpg",
    },
    {
      name: "Graphic design",
      description:
        "Graphic design is the process of visual communication and problem-solving through the use of typography, photography, iconography and illustration. The field is considered a subset of visual communication and communication design, but sometimes the term graphic design is used synonymously.",
      image: "/412584793_1451421928779742_5813991315657365351_n.webp",
    },
    {
      name: "Web Development",
      description:
        "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
      image: "/hillfair.png",
    },
  ];
  return (
    <div>
      <div className="w-full flex flex-col sm:flex-row justify-center items-center h-full min-h-[80vh] mt-10">
        <div className="flex-1 leading-relaxed text-center m-5 mt-10">
          <div className="rounded-xl bg-[#B1B1B154] text-[#F8E5CF] py-6 lg:py-11 h-full">
            <h1 className="text-4xl font-semibold  md:6xl lg:h1 w-full">FRESHMAN</h1>
            <h2 className="text-xl  lg:h3">INTERVIEWS 2K24</h2>
            <p className="text-[10px] px-5 mt-3 lg:text-xl">
              Welcome! We're excited to have you here. We look 
              forward to seeing you at the upcoming interviews. 
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
            className="max-h-[70vh] px-5"
          />
        </div>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-n-1">
            What we do ?
          </h1>
          <div class="h-1 w-20 bg-indigo-500 rounded"></div>

          <div class="flex flex-wrap ">
            {dept.map((d) => (
              <div class="xl:w-1/4 md:w-1/2 p-1">
                <div class=" p-6 rounded-lg">
                  <img
                    class="h-36 rounded w-full object-cover object-center mb-6"
                    src={d.image}
                    alt="content"
                  />

                  <h2 class="text-lg  font-medium title-font mb-4 text-n-1">
                    {d.name}
                  </h2>
                  <p class="leading-relaxed text-base text-justify text-n-3">
                    {d.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
