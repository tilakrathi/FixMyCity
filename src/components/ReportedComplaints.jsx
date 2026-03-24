import React, { useEffect, useState } from "react";
import { auth } from "../utils/Firebase";
import { fetchComplaintsByUser } from "../utils/FirebaseFunctions";
import { Statuses } from "../utils/enums";
import ComplaintsCard from "./ComplaintsCard";

const ReportedComplaints = () => {
  const [Complaints, setComplaints] = useState([]);
  const user = auth.currentUser;

  useEffect(() => {
    if (!user?.uid) return;

    const unsubscribe = fetchComplaintsByUser(
      user.uid,
      (updatedComplaints) => setComplaints(updatedComplaints)
    );

    return () => { unsubscribe(); };
  }, [user]);

  if (!user) {
    return <div className="p-5 text-center text-gray-500 mt-10">Loading dashboard...</div>;
  }

  const stats = [
    { label: "Total Reports", value: Complaints.length },
    { label: "In Progress", value: Complaints.filter(c => c.status === Statuses.inProgress).length },
    { label: "Resolved", value: Complaints.filter(c => c.status === Statuses.solved).length },
    { label: "Rejected", value: Complaints.filter(c => c.status === Statuses.rejected).length },
  ];

  return (
    <div className="w-full flex flex-col gap-4">

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-xs text-gray-500 uppercase tracking-wider">{s.label}</p>
            <p className="text-2xl font-semibold text-gray-900 mt-1">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Complaint list */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-xl w-full flex flex-col p-6">
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 text-base">Your Reports</h3>
          <p className="text-gray-500 text-sm mt-0.5">Track the status of your reported issues.</p>
        </div>

        <div className="overflow-y-auto max-h-[28rem]">
          {!Complaints || Complaints.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className="text-4xl mb-3">📋</p>
              <h2 className="text-gray-700 font-semibold mb-1">You haven't reported any issues yet</h2>
              <p className="text-gray-500 text-sm">Start by reporting your first issue</p>
            </div>
          ) : (
            Complaints.map((complaint) => (
              <ComplaintsCard key={complaint.id} complaint={complaint} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportedComplaints;
