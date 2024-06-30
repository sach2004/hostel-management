"use client";
import React from "react";
import Link from "next/link";
import { FaHome, FaUsers, FaBed, FaBook } from "react-icons/fa";

const SidebarAdmin: React.FC = () => {
  return (
    <div className="min-h-screen w-64 bg-purple-700 text-white flex flex-col">
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold">Hostel Management</h2>
      </div>
      <ul className="flex-1">
        <Link href="/adminhome" className="flex items-center p-4 hover:bg-purple-600 cursor-pointer ">
          <li className="flex items-center">
            <FaHome className="mr-2" /> Dashboard
          </li>
        </Link>
        <Link href="/adminhome" className="p-4 hover:bg-purple-600 cursor-pointer flex items-center">
          <li  className="flex items-center">
            <FaUsers className="mr-2" /> Leave Form
          </li>
        </Link>
        <li className="p-4 hover:bg-purple-600 cursor-pointer flex items-center">
          <FaBed className="mr-2" /> Rooms
        </li>
        <li className="p-4 hover:bg-purple-600 cursor-pointer flex items-center">
          <FaBook className="mr-2" /> Courses
        </li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;
