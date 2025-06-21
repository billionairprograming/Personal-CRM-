//Manny
import React from "react";

// make buttons for different button types from daisyUI, look at docs for them.
// text maybe ???
const Buttons = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
}) => {
  const baseClasses =
    "btn rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out";
  let variantClasses;

  switch (variant) {
    case "primary":
      variantClasses = "btn-primary bg-teal-400 hover:bg-teal-500 text-white";
      break;
    case "secondary":
      variantClasses =
        "btn-secondary bg-purple-300 hover:bg-purple-400 text-white";
      break;
    case "outline":
      variantClasses =
        "btn-outline border-teal-400 text-teal-700 hover:bg-teal-400 hover:text-white";
      break;
    case "ghost":
      variantClasses = "btn-ghost text-gray-700 hover:bg-gray-200";
      break;
    case "danger":
      variantClasses = "btn-error bg-red-400 hover:bg-red-500 text-white";
      break;
    default:
      variantClasses = "btn-primary bg-teal-400 hover:bg-teal-500 text-white";
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Buttons;

{
  /*This is gonna be buttons that will be used all over the app */
}
