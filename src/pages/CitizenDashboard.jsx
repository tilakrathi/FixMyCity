import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../components/Navbar";
import SpinnerModal from "../components/SpinnerModal";
import { auth } from "../utils/Firebase";
import { getComplaints, isOfficial } from "../utils/FirebaseFunctions";

const CitizenDashboard = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [SpinnerVisible, setSpinnerVisible] = useState(false);
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getComplaints();
        setComplaints(data || []);
      } catch (error) {
        console.error(error);
        setComplaints([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleBeforeInstallPrompt = (event) => {
    event.preventDefault();
    setDeferredPrompt(event);
  };

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        setDeferredPrompt(null);
      });
    }
  };

  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <SpinnerModal visible={SpinnerVisible} />
      <Navbar />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="max-w-5xl mx-auto mt-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Your Reported Issues
          </h1>
        </div>

        {/* Empty State */}
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : complaints.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-xl p-10 text-center shadow-sm">
            <p className="text-gray-500 text-lg mb-4">
              No issues reported yet
            </p>

            <button
              onClick={() => navigate("/report")}
              className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Report New Issue
            </button>
          </div>
        ) : (
          /* Complaint Cards */
          <div className="grid gap-4">
            {complaints.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition"
              >
                <h2 className="font-semibold text-gray-800 text-lg">
                  {item.title}
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  {item.description}
                </p>

                <div className="flex justify-between mt-3 text-sm text-gray-400">
                  <span>{item.category}</span>
                  <span>{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CitizenDashboard;
