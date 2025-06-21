//Manny
import React from "react";

const Card = ({ title, className = "" }) => {
  return (
    <div className={`card bg-white shadow-lg rounded-xl p-6 ${className}`}>
      {title && (
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      )}
    </div>
  );
};

export default Card;
