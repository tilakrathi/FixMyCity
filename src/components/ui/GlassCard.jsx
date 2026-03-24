import React from "react";
import { cn } from "../../utils/cn";

export const GlassCard = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-gray-200 p-6 shadow-sm",
        "transition-all duration-200 hover:-translate-y-1 hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
