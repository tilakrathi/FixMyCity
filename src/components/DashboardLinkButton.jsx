import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const DashboardLinkButton = ({
  name,
  icon,
  link,
  onClick,
  className,
  subtitle,
}) => {
  return (
    <Link
      className=""
      to={link}
      onClick={() => {
        onClick ? onClick() : null;
      }}
    >
      <div
        className={
          `DashboardLinkButton bg-white border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 rounded-xl w-full flex flex-col justify-center items-center p-8 my-3 cursor-pointer 
      lg:h-48 lg:text-xl text-gray-800 hover:text-blue-600
      ` + className
        }
      >
        <FontAwesomeIcon size={"2x"} icon={icon} />
        <p className="mt-6 text-center">{name}</p>
        <p
          className={`text-center text-xs lg:text-base ${
            !subtitle ? "hidden" : "block"
          }`}
        >
          ({subtitle})
        </p>
      </div>
    </Link>
  );
};

export default DashboardLinkButton;
