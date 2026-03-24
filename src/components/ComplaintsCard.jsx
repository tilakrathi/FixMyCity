import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "@mui/material";
import React, { useState } from "react";
import { Statuses, statusColors } from "../utils/enums";
import ComplaintDetailModal from "./ComplaintDetailModal";

const ComplaintsCard = ({ complaint }) => {
  const [DialogOpen, setDialogOpen] = useState(false);
  let date = new Date(complaint.timestamp);
  let StatusColorEnum = Object.keys(Statuses).find(
    (key) => Statuses[key] === complaint.status
  );

  const priorityColor = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  return (
    <>
      <Dialog open={DialogOpen} onClose={() => setDialogOpen(false)}>
        <ComplaintDetailModal
          setDialogOpen={setDialogOpen}
          complaint={complaint}
        />
      </Dialog>
      <div className="bg-white border border-gray-200 rounded-lg my-3 p-5 flex flex-col gap-2.5 transition-all duration-200 hover:-translate-y-[3px] hover:shadow-lg cursor-pointer">
        <div className="flex justify-between items-start">
          <div>
            <p className="font-bold text-gray-800">{complaint.title || complaint.reason}</p>
            <p className="text-xs text-gray-400 mt-0.5">
              {date.toLocaleDateString("en-IN")}
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-end">
            {complaint.department && (
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-100 uppercase tracking-wider">
                {complaint.department}
              </span>
            )}
            {complaint.category && (
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-500 uppercase tracking-wider">
                {complaint.category}
              </span>
            )}
            {complaint.priority && (
              <div 
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${priorityColor[complaint.priority] || "bg-gray-100 text-gray-600"}`}
                title={complaint.isAIPriority ? "Priority automatically assigned based on issue severity" : ""}
              >
                <span>Priority: {complaint.priority.toUpperCase()}</span>
                {complaint.isAIPriority && <span className="opacity-75">(AI)</span>}
              </div>
            )}
          </div>
        </div>

        {(complaint.description || complaint.additionalInfo) && (
          <p className="text-sm text-gray-500 line-clamp-2">{complaint.description || complaint.additionalInfo}</p>
        )}

        <div className="flex justify-between items-center pt-2.5 border-t border-gray-100 mt-1.5">
          <div className="flex gap-2 items-center text-gray-500 text-xs">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400" />
            <span className="truncate max-w-[12rem]">{complaint.location.name}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs font-semibold">
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{ backgroundColor: statusColors[StatusColorEnum] }}
              ></span>
              {complaint.status}
            </span>
            <button
              className="text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
              onClick={() => setDialogOpen(true)}
            >
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComplaintsCard;
