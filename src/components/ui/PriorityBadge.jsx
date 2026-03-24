import React from "react";
import { cn } from "../../utils/cn";

export const PriorityBadge = ({ priority, className }) => {
  const getColors = () => {
    switch (priority?.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "low":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      default:
        return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  return (
    <span className={cn("px-3 py-1 text-xs font-bold rounded-full border", getColors(), className)}>
      {priority || "Normal"} Priority
    </span>
  );
};
