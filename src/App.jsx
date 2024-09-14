// src/App.js
import React from "react";
import { useAuth } from "./Context/useAuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import Navbar from "./Components/Navbar";
function App() {
  const { user, signIn, signOutUser } = useAuth(); // Access authentication state and functions

  return (
    <div className="App max-w-7xl mx-auto pt-4">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<SignIn />}></Route>
          <Route path="*" element={<div>Something went wrong</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
