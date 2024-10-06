import React from "react";
// import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ResetPass from "./ResetPass";

const Pages = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home></Home>}></Route> */}
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/resetpass" element={<ResetPass></ResetPass>}></Route>
      </Routes>
    </div>
  );
};

export default Pages;