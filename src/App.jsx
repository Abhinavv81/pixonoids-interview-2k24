// src/App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { Suspense } from "react";
import Loader from "./Components/Loader";
const SignIn = React.lazy(() => import("./Pages/SignIn"));
const Done = React.lazy(() => import("./Pages/Done"));
const Particles = React.lazy(() => import("./Components/Particle"));
const Footer = React.lazy(() => import("./Components/Footer"));
function App() {
  return (
    <div className="App max-w-7xl mx-auto pt-4 p-3 ">
      <Particles
        className="fixed top-0 left-0 -z-10 h-full w-full"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <BrowserRouter>
        <div className="-ml-9">
          <Navbar />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <Suspense fallback={<Loader />}>
                <SignIn />
              </Suspense>
            }
          ></Route>
          <Route path="*" element={<div>Something went wrong</div>}></Route>
          <Route
            path="/done"
            element={
              <Suspense fallback={<Loader />}>
                <Done />
              </Suspense>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
