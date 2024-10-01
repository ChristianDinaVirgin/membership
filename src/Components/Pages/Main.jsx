import React, { useState } from "react";
import Image from "next/image"; // use Next.js Image for optimization

const Main = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen(!navIsOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          <Image src="/pics/hcdclogo.png" alt="Logo" width={50} height={50} />
          <h1 className="ml-4 text-xl">HCDC Medical Clinic</h1>
        </div>
        <i
          className="fa fa-bars cursor-pointer text-2xl"
          onClick={toggleNav}
        ></i>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-width duration-500 ${
          navIsOpen ? "w-64" : "w-0"
        }`}
      >
        <div className="flex flex-col items-center p-4">
          <Image
            src="/pics/hcdclogo.png"
            alt="Sidebar Logo"
            width={100}
            height={100}
          />
          <div className="mt-5 text-center">
            <h6>Welcome User</h6>
          </div>
          <nav className="mt-10 w-full">
            <a href="index.php" className="block py-2 px-4 hover:bg-gray-700">
              Profile
            </a>
            <a
              href="student/appointment.php"
              className="block py-2 px-4 hover:bg-gray-700"
            >
              Appointment
            </a>
            <a
              href="student/medical_records.php"
              className="block py-2 px-4 hover:bg-gray-700"
            >
              Medical Records
            </a>
            <a
              href="student/laboratory_results.php"
              className="block py-2 px-4 hover:bg-gray-700"
            >
              Laboratory Results
            </a>
            <a href="logout.php" className="block py-2 px-4 hover:bg-gray-700">
              Logout
            </a>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className={`transition-all duration-500 p-6 ${navIsOpen ? "ml-64" : "ml-0"}`}>
        <div className="container mx-auto">
          <h4 className="text-2xl font-bold">Profile</h4>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 mt-6">
            <div className="text-center">
              <h1 className="text-4xl">3</h1>
              <h6 className="text-lg">Current Level</h6>
            </div>
            <div className="text-center">
              <h1 className="text-4xl">BSIT</h1>
              <h6 className="text-lg">Balance</h6>
            </div>
            <div className="text-center">
              <h1 className="text-4xl">Enrolled</h1>
              <h6 className="text-lg">Status</h6>
            </div>
            <div className="md:col-span-2">
              <div className="border p-4 rounded-lg">
                <h6>ID: </h6>
                <h6>Name: </h6>
                <h6>Program: BSIT</h6>
                <h1 className="text-xl font-bold">SY: 2022 - 2023</h1>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl">Email: </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
