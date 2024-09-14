import React, { useState } from "react";
const Navbar = () => {
  const [AboutUsOpen, setAboutUsOpen] = useState(false);
  const [ContactUsOpen, setContactUsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const openAboutus = () => {
    setAboutUsOpen(true);
    setIsOpen(false);
    setContactUsOpen(false); 
  };

  const openContactus = () => {
    setContactUsOpen(true);
    setIsOpen(false);  
    setAboutUsOpen(false);
  };

  const closePopup = () => {
    setAboutUsOpen(false);
    setContactUsOpen(false);
  };

  return (
    <div className="flex  items-center justify-between ml-8 ">
      <button className=" font-advent font-bold text-3xl md:text-5xl mx-2">
        PIXONOIDS
      </button>
      <img
        src={"/pixonoids_logo.png"}
        alt="logo"
        className="w-0 -ml-5 animate-spin duration-1000 hover:scale-105 hover:transition-all hover:duration-500 hover:ease-in-out md:w-10 sm:hidden md:block "
      />
      <div className=" gap-20 px-1 hidden md:flex">
        <button onClick={openAboutus}>
          <span className="font-advent font-bold text-base md:text-2xl">
            ABOUT US
          </span>
        </button>
        <button onClick={openContactus}>
          <span className="font-advent font-bold text-base md:text-2xl">
            CONTACT US
          </span>
        </button>
      </div>
      {isOpen ? ( 
        <div className="text-black font-bold font-advent fixed rounded-xl flex flex-col gap-1  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#b1b1b1ce]  z-20  items-center justify-around p-2 scale-100 transition-all delay-700 ease-in-out h-[40vh] w-[60vw] ">
          
          <button onClick={openAboutus}>
            <span className="font-advent font-extrabold text-xl md:text-2xl">
              ABOUT US
            </span>
          </button>
          <button onClick={openContactus}>
            <span className="font-advent font-extrabold text-xl md:text-2xl">
              CONTACT US{" "}
            </span>
          </button>
        </div>
      ) : null}
      <button
        onClick={openMenu}
        className="md:hidden flex flex-col gap-1  z-20"
      >
        <img
          src={"/pixonoids_logo.png"}
          alt="logo"
          className="w-7 animate-spin duration-1000 hover:scale-105 hover:transition-all hover:duration-500 hover:ease-in-out md:w-10  md:block "
        />
      </button>
      {AboutUsOpen && (
        <>
          <div
            onClick={closePopup}
            className="fixed top-0 left-0 right-0 w-[100vw] h-[100vh] bg-black/95 z-1"
          ></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#B1B1B154] sm:h-[100px] sm:w-[200px] z-2 items-center p-5 scale-100 transition-all delay-700 ease-in-out md:h-[250px] md:w-[500px] lg:h-[500px] lg:w-[750px]">
            <button
              onClick={closePopup}
              className="absolute right-1.5 top-0.5 w-7 aspect-square sm:text-3xl md:text-4xl"
            >
              &times;
            </button>
            <div className="flex items-center justify-center flex-col gap-5 md:gap-2">
              <span className="text-white sm:text-[18px] md:text-2xl lg:text-4xl  font-bold font-advent leading-normal tracking-widest md:-mt-5  lg:mt-1">
                ABOUT US
              </span>
              <div className="flex  justify-center ">
                <iframe
                  className="w-[300px] h-[165px] lg:w-[600px] lg:h-[337px]"
                  src="https://www.youtube.com/embed/afduRwzNNfw?si=Izs8m5IgPWK8WQyS"
                  allowfullscreen
                ></iframe>
              </div>
              <span className="leading-normal text-center text-[12px] md:text-[12px] lg:text-[20px] text-[#F8E5CF]">
                A group of budding animators, graphic designers. photographers,
                video editors and web developers
              </span>
            </div>
          </div>
        </>
      )}
      {ContactUsOpen && (
        <>
          <div
            onClick={closePopup}
            className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-black/95 z-1"
          ></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#B1B1B154] sm:h-[100px] sm:w-[200px]  md:h-[250px] md:w-[500px] lg:h-[300px] lg:w-[500px] z-2 items-center p-5 scale-100 transition-all delay-700 ease-in-out">
            <button
              onClick={closePopup}
              className="absolute right-1.5 top-0.5 w-7 aspect-square sm:text-3xl md:text-4xl"
            >
              &times;
            </button>
            <div className="flex items-center justify-center flex-col gap-5">
              <span className="text-white sm:text-[18px] md:text-2xl lg:text-4xl font-bold font-advent text-center tracking-widest">
                CONTACT US
              </span>
              <div className="flex  justify-between gap-15 items-center pt-16 text-[#F8E5CF] -mt-3">
                <div className="flex flex-col gap-2 text-center">
                  <span className="sm:text-[12px]  lg:text-2xl font-semibold">
                    RAHUL PRASAD
                  </span>
                  <span className="sm:text-[12px]  lg:text-2xl">
                    7807592676
                  </span>
                </div>
                <div className="flex flex-col gap-2 text-center">
                  <span className=" sm:text-[12px]  lg:text-2xl font-semibold ">
                    VANI CHAUHAN
                  </span>
                  <span className="sm:text-[12px]  lg:text-2xl">
                    9990054291
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
