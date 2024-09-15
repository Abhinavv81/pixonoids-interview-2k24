import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const dept = [
    {
      name: "Pre Production",
      description:
        "Solely responsible for cov- ering and hosting events throughout the college, Regular Photowalks keep their skills sharp and take a fresh breath of nature.Using modern software like Adobe Light- room and Adobe Photoshop, each click is elevated into something beautifully dis- tinct, with an amazing blend of colours and effects.",
      image: "/g1.jpg",
    },
    {
      name: " Post Production",
      description:
        "World-class cinematography, seamless transitions, lively animations, spatial sound design and much more goes into making an immersive video experience.There is more to it than what meets the eye. The production of a video at Pixonoids is an exciting and engaging process",
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
        "We at Pixonoids - plan, create and code user-friendly and fully functional web applications for the cultural and technical fests. The exe- cution of code is accomplished by using fundamental and advanced concepts of HTML, CSS, Javascript, Node.js and also frame- works such as React.js",
      image: "/hillfair.png",
    },
  ];
  return (
    <div>
      <div className="w-full flex flex-col sm:flex-row justify-center items-center h-full min-h-[80vh] mt-10">
        <div className="flex-1 leading-relaxed text-center m-5 mt-10">
          <div className="rounded-xl bg-[#B1B1B154] text-[#F8E5CF] py-6 lg:py-11 h-full">
            <h1 className="text-4xl font-semibold  md:6xl lg:h1 w-full">
              FRESHMAN
            </h1>
            <h2 className="text-xl  lg:h3">INTERVIEWS 2K24</h2>
            <p className="text-[10px] px-5 mt-3 lg:text-xl">
              Welcome! We're excited to have you here. We look forward to seeing
              you at the upcoming interviews. <br />
              Best of luck!
            </p>
            <Link to="/register">
              <button className="btn my-4">START YOUR APPLICATION</button>
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
      <section className="text-gray-600 body-font">
        <div className="container  py-24 ">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-n-1">
            What we do ?
          </h1>
          <div className="h-1 w-20 bg-color-1 rounded"></div>

          <div className="flex flex-wrap ">
            {dept.map((d, index) => (
              <div className="xl:w-1/4 md:w-1/2 p-1" key={index}>
                <div className=" py-6 rounded-lg md:px-3">
                  <img
                    className="h-36 rounded w-full object-cover object-center mb-6"
                    src={d.image}
                    alt="content"
                  />

                  <h2 className="text-lg  font-medium title-font mb-4 text-n-1">
                    {d.name}
                  </h2>
                  <p className="leading-relaxed text-base text-justify text-n-3">
                    {d.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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
    </div>
  );
};

export default Home;
