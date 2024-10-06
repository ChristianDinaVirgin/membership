import React, { useState } from "react";
import { PuffLoader } from 'react-spinners';
import hcdclogo from "../../../assets/images/hcdc2.png";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen, loading] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <PuffLoader color="#36454F" size={100} speedMultiplier={1} />
        </div>
      ) : (
        <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        {isSidebarOpen && (
            <aside className="bg-gray-800 text-white w-64 p-4">
            <h1 className="text-xl font-bold mb-1">ITS Membership Fee System</h1>
            <p className="text-gray-400 mb-0">59826920</p>
            <p className="text-gray-400">Admin</p>
            <nav className="mt-8">
                <button className="bg-gray-800 hover:bg-gray-600 text-white font-semibold py-2 px-4 w-full mb-2 text-left">
                    Attendance
                </button>
                <button className="bg-gray-800 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded w-full mb-2 text-left">
                    Event
                </button>
                <button className="bg-gray-800 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded w-full mb-2 text-left">
                    Membership Fee
                </button>
                <button className="bg-gray-800 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded w-full text-left">
                    Logout
                </button>
            </nav>
            </aside>
        )}

        {/* Main content */}
        <main className="flex-1 p-6">
            {/* Header */}
            <div className="bg-red-600 text-white flex items-center justify-between p-4">
            <button onClick={toggleSidebar} className="text-white focus:outline-none">
                <div className="flex flex-col">
                <span className="h-1 w-6 bg-white mb-1"></span>
                <span className="h-1 w-6 bg-white mb-1"></span>
                <span className="h-1 w-6 bg-white"></span>
                </div>
            </button>
            <div className="flex items-center">
                {/* <h2 className="text-lg font-semibold mr-2">ITS Membership Fee System</h2> */}
                <img src={hcdclogo} alt="Logo" className="h-8 mr-2" />
            </div>
            </div>

            {/* Statistic Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {/* Card 1 - Appointments */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
                <div>
                <h3 className="text-2xl font-bold">0</h3>
                <p className="text-gray-500">Appointments</p>
                </div>
                <div className="text-4xl text-blue-600">👤</div> {/* Placeholder for icon */}
            </div>

            {/* Card 2 - Patients */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
                <div>
                <h3 className="text-2xl font-bold">1</h3>
                <p className="text-gray-500">Patients</p>
                </div>
                <div className="text-4xl text-blue-600">👥</div> {/* Placeholder for icon */}
            </div>

            {/* Card 3 - Staff */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
                <div>
                <h3 className="text-2xl font-bold">2</h3>
                <p className="text-gray-500">Staffs</p>
                </div>
                <div className="text-4xl text-blue-600">🎓</div> {/* Placeholder for icon */}
            </div>
            </div>
        </main>
        </div>
      )}
    </>
  );
};

export default Dashboard;
