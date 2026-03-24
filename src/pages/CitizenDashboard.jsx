import {
  faEdit,
  faMobileScreen,
  faSignOut,
  faTrafficLight,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import DashboardLinkButton from "../components/DashboardLinkButton";
import Navbar from "../components/Navbar";
import ReportedComplaints from "../components/ReportedComplaints";
import SpinnerModal from "../components/SpinnerModal";
import { auth } from "../utils/Firebase";
import { fetchComplaintsByUser, isOfficial } from "../utils/FirebaseFunctions";
import { statusColors } from "../utils/enums";
import Breadcrumb from "../components/Breadcrumb";

const CitizenDashboard = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [SpinnerVisible, setSpinnerVisible] = useState(false);
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const user = auth.currentUser;

  useEffect(() => {
    setSpinnerVisible(true);
    const unsubscribeAuth = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setSpinnerVisible(false);
        navigate("/citizen-login");
        return;
      }

      const official = await isOfficial(user.uid);
      if (official) {
        setSpinnerVisible(false);
        navigate("/official-dashboard");
      } else {
        setSpinnerVisible(false);
        if (params.get("newUser")) {
          toast.success("Registration successful, Welcome to citizen dashboard!", {
            icon: "👋",
          });
        }
      }
    });
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      unsubscribeAuth();
    };
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

  if (!user) {
    return <div className="p-5 w-full text-center mt-20 text-gray-500">Loading dashboard...</div>;
  }

  return (
    <>
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
      <div className="lg:mt-10 my-8 lg:mx-20 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-auto px-5 lg:px-0">
        <Breadcrumb />
        <button onClick={() => navigate(-1)} className="text-sm text-gray-600 hover:text-gray-900 mb-4">← Back</button>
        <h2 className="leading-normal font-bold text-xl lg:text-[2rem] text-gray-800">
          My Reports
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Help improve your area by reporting problems around you.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-10 mx-5 lg:mx-20 pb-10">
        <div className="flex flex-col gap-2 w-full lg:w-1/4 shrink-0">
          <h3 className="font-bold text-gray-700 text-lg mb-4">Quick Actions</h3>
          <DashboardLinkButton
            icon={faEdit}
            name={"Report a City Issue"}
            link={"/report"}
          />
          <DashboardLinkButton
            icon={faTrafficLight}
            name={"Track Your Reports"}
            link={"/track-complaints"}
            className={"lg:hidden"}
          />
          <DashboardLinkButton
            icon={faMobileScreen}
            name={"Install as an app (Mobile)"}
            onClick={handleInstall}
            className={"lg:hidden"}
          />
          <DashboardLinkButton
            icon={faSignOut}
            name={"Logout"}
            onClick={handleLogout}
            className={"lg:hidden"}
          />
        </div>
        
        <div className="w-full lg:flex-1 mt-6 lg:mt-0">
          <ReportedComplaints />
        </div>
      </div>
    </>
  );
};

export default CitizenDashboard;
