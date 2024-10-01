import React, { useContext } from "react";
import nature from "../../assets/images/nature.jpg";
import { Avatar } from "@material-tailwind/react";
import avatar from "../../assets/images/avatar.jpg";
import { AuthContext } from "../AppContext/AppContext";

const LeftSide = () => {
  const { user, userData } = useContext(AuthContext);

  return (
    <div className="flex flex-col h-screen bg-white pb-4 border-2 rounded-r-xl shadow-lg">
      <div className="flex flex-col items-center relative">
        <img
          className="h-28 w-full rounded-r-xl"
          src={nature}
          alt="nature"
        ></img>
        <div className="absolute -bottom-4">
          <Avatar size="md" src={user?.photoURL || avatar} alt="avatar"></Avatar>
        </div>
      </div>
      <div className="flex flex-col items-center pt-6">
        <p className="font-roboto font-medium text-md text-black no-underline tracking-normal leading-none">
          {user?.name || userData?.name}
        </p>
      </div>
    </div>
  );
};

export default LeftSide;
