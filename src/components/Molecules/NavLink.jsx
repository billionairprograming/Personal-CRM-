//Manny
import React from "react";

const NavLink = ({ children, onClick, icon, active = false }) => {
  const activeClasses = active
    ? "bg-teal-200 text-teal-800 font-semibold"
    : "text-gray-700 hover:bg-teal-100 hover:text-teal-700";

  return (
    <li>
      <a
        onClick={onClick}
        className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors duration-200 ease-in-out ${activeClasses}`}
      >
        {icon && <span className="mr-3">{icon}</span>}
        {children}
      </a>
    </li>
  );
};

export default NavLink;
