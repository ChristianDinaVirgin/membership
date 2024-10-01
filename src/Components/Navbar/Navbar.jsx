import React from "react";
import UserLinks from "./UserLinks";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b border-gray-100 w-full px-44 py-2">
      <Link to="/">
        <div className="text-3xl font-extrabold font-roboto">
          <span className="text-transparent bg-clip-text bg-btn">
            FlickPost 
          </span>
        </div>
      </Link>
      <div>
        <UserLinks></UserLinks>
      </div>
    </div>
  );
};

export default Navbar;
