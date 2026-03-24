import { Dialog } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ComplaintDetailModal from "../components/ComplaintDetailModal";
import Navbar from "../components/Navbar";
import SpinnerModal from "../components/SpinnerModal";
import Footer from "../components/Footer";
import { auth } from "../utils/Firebase";
import { fetchComplaints, isOfficial } from "../utils/FirebaseFunctions";
import Breadcrumb from "../components/Breadcrumb";
import { Statuses, statusColors } from "../utils/enums";

const OfficialDashboard = () => {
  const [Complaints, setComplaints] = useState([]);
  const [ModalOpen, setModalOpen] = useState(false);
  const [complaint, setComplaint] = useState({});
  const [SpinnerVisible, setSpinnerVisible] = useState(false);
  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    setSpinnerVisible(true);
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setSpinnerVisible(false);
        navigate("/official-login");
        return;
      }
      const official = await isOfficial(user.uid);
      if (!official) {
        setSpinnerVisible(false);
        navigate("/citizen-dashboard");
      } else {
        setSpinnerVisible(false);
      }
    });
    const unsubscribe = fetchComplaints(handleComplaintsUpdate);
    return () => { unsubscribe(); };
  }, []);

  const handleComplaintsUpdate = (updatedComplaints) => {
    setComplaints(updatedComplaints);
  };

  const columns = [
    { field: "reason", headerName: "Complaint Reason", width: 300 },
    { field: "author", headerName: "Reported By", width: 150 },
    {
      field: "location", headerName: "Location", width: 200,
      valueGetter: (params) => `${params.row.location.name}`,
    },
    {
      field: "timestamp", headerName: "Date & Time", width: 200,
      valueGetter: (params) => {
        let d = new Date(params.row.timestamp);
        return d.toLocaleDateString() + " , " + d.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
      },
    },
    {
      field: "status", headerName: "Status", width: 150, headerAlign: "center", align: "center",
      cellClassName: (params) => {
        if (params.value == null) return "";
        return clsx("StatusCol", {
          inProgress: params.value === Statuses.inProgress,
          Rejected: params.value === Statuses.rejected,
          Solved: params.value === Statuses.solved,
        });
      },
    },
  ];

  const stats = [
    { label: "Total", value: Complaints.length, color: "text-gray-800" },
    { label: "High Priority", value: Complaints.filter(c => c.priority === "High").length, color: "text-red-500" },
    { label: "In Progress", value: Complaints.filter(c => c.status === Statuses.inProgress).length, color: "text-yellow-500" },
    { label: "Resolved", value: Complaints.filter(c => c.status === Statuses.solved).length, color: "text-green-500" },
  ];

  if (!user) {
    return <div className="p-5 w-full text-center mt-20 text-gray-500">Loading dashboard...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SpinnerModal visible={SpinnerVisible} />
      <Navbar />

      <div className="flex-1 px-5 lg:px-20 pb-10">
        <div className="lg:mt-8 my-6">
          <Breadcrumb />
          <button onClick={() => navigate(-1)} className="text-sm text-gray-600 hover:text-gray-900 mb-4">← Back</button>
          <h2 className="font-bold text-xl lg:text-2xl text-gray-800">
            All Issues
          </h2>
          <p className="text-sm text-gray-500 mt-1">Review and manage citizen reports.</p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm">
              <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{s.label}</p>
              <p className={`text-2xl font-bold mt-1 ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Dialog */}
        <Dialog open={ModalOpen} onClose={() => setModalOpen(false)}>
          <ComplaintDetailModal
            setDialogOpen={setModalOpen}
            complaint={complaint}
          />
        </Dialog>

        {/* Data table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          {!Complaints || Complaints.length === 0 ? (
            <div className="p-10 flex flex-col items-center justify-center text-center">
              <p className="text-gray-700 font-medium">No issues reported yet</p>
              <p className="text-sm text-gray-400 mt-1">New citizen reports will appear here</p>
            </div>
          ) : (
            <DataGrid
              rows={Complaints}
              columns={columns}
              onRowClick={(params) => {
                setComplaint(params.row);
                setModalOpen(true);
              }}
              initialState={{
                pagination: { paginationModel: { page: 0, pageSize: 10 } },
              }}
              pageSizeOptions={[10, 20, 30]}
              sx={{
                border: "none",
                ".MuiDataGrid-columnHeaderTitle": { fontWeight: "bold !important", overflow: "visible !important" },
                "& .StatusCol": { color: "#fff", fontWeight: 900, marginY: 1.5, minHeight: "30px !important", marginLeft: "auto !important", borderRadius: 500 },
                "& .StatusCol.inProgress": { backgroundColor: statusColors.inProgress },
                "& .StatusCol.Rejected": { backgroundColor: statusColors.rejected },
                "& .StatusCol.Solved": { backgroundColor: statusColors.solved },
              }}
            />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OfficialDashboard;
