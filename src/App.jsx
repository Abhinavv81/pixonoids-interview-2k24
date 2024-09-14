// src/App.js
import React from "react";
import { useAuth } from "./Context/useAuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import Navbar from "./Components/Navbar";
import Particles from "./Components/Particle";
import Done from "./Pages/Done";
function App() {
  const { user, signIn, signOutUser } = useAuth(); // Access authentication state and functions

  return (
    <div className="App max-w-7xl mx-auto pt-4 p-3">
      <Navbar />
      <Particles
        className="fixed top-0 left-0 -z-10 h-full w-full"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<SignIn />}></Route>
          <Route path="*" element={<div>Something went wrong</div>}></Route>
          <Route path="/done" element={<Done />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
