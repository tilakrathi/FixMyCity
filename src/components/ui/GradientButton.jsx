import React from "react";
import { cn } from "../../utils/cn";

export const GradientButton = ({ children, className, onClick, type = "button", disabled = false, ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white rounded-lg",
        "bg-blue-600 hover:bg-blue-700 active:bg-blue-800",
        "shadow-sm hover:shadow transition-all duration-150",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
