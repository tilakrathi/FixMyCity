import React from "react";
import { cn } from "../../utils/cn";
import { Statuses } from "../../utils/enums";

export const StatusBadge = ({ status, className }) => {
  const getColors = () => {
    switch (status) {
      case Statuses.solved:
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case Statuses.rejected:
        return "bg-red-50 text-red-700 border-red-200";
      case Statuses.inProgress:
      default:
        return "bg-blue-50 text-blue-700 border-blue-200";
    }
  };

  const getDotColors = () => {
    switch (status) {
      case Statuses.solved: return "bg-emerald-500";
      case Statuses.rejected: return "bg-red-500";
      case Statuses.inProgress:
      default: return "bg-blue-500";
    }
  }

  return (
    <span className={cn("inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-full border shadow-sm", getColors(), className)}>
      <span className={cn("w-2 h-2 rounded-full", getDotColors())}></span>
      {status || "In Progress"}
    </span>
  );
};
