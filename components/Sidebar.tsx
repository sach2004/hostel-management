import React from "react";
import Link from "next/link";
import { FaHome, FaUsers, FaBed, FaBook } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <div className="h-full w-[120px] bg-purple-700 text-white flex flex-col">
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold">Hostel Hub</h2>
      </div>
      <ul className="flex-1 flex flex-col items-center justify-center">
        <Link href="/home" passHref>
          <li className="flex items-center p-4 my-4 hover:bg-purple-600 cursor-pointer rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0.708.708L8 2.207l6.646 6.647a.5.5 0 0 0.708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
              <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
            </svg>
          </li>
        </Link>
        <Link href="/form" passHref>
          <li className="p-4 my-4 hover:bg-purple-600 cursor-pointer flex items-center rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" className="bi bi-clipboard-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2"/>
</svg>
          </li>
        </Link>
        <li className="p-4 my-4 hover:bg-purple-600 cursor-pointer flex items-center rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
          </svg>
        </li>
        <li className="p-4 my-4 hover:bg-purple-600 cursor-pointer flex items-center rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
