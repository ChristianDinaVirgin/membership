import React from "react";
// import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ResetPass from "./ResetPass";
import AdminIndex from "./Admin/admin_index";

const Pages = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home></Home>}></Route> */}
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/resetpass" element={<ResetPass></ResetPass>}></Route>
        <Route path="/admin_index" element={<AdminIndex></AdminIndex>}></Route>
      </Routes>
    </div>
  );
};

export default Pages;