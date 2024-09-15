import React from "react";

const Loader = () => {
  return (
    <div className="h-[70vh] w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center gap-5">
        <img
          src="pixonoids_logo.png"
          alt=""
          className="logo-animation w-[100px]"
        />
        <span className="loadingspan"></span>
      </div>
    </div>
  );
};

export default Loader;
