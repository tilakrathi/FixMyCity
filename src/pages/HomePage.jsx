import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegisterAccount from "../components/RegisterAccount";
import { auth } from "../utils/Firebase";
import { isOfficial } from "../utils/FirebaseFunctions";
import Navbar from "/src/components/Navbar";
import Footer from "../components/Footer";
import demoHero from "../assets/demo-hero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad, faTrash, faCarSide, faDroplet, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const official = await isOfficial(user.uid);
        if (official) {
          navigate("/official-dashboard");
        } else {
          navigate("/citizen-dashboard");
        }
      }
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 px-6 py-10 lg:px-20 lg:py-14">
        <section className="mx-auto w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="w-full lg:max-w-xl text-left">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4 tracking-tight">
              Spotted a problem?
              <span className="block text-blue-600 mt-2">Fix it with FixMyCity.</span>
            </h1>
            <p className="text-gray-500 text-sm lg:text-base mb-6 max-w-md leading-relaxed">
              Potholes, broken streetlights, garbage — safely report local infrastructure problems to your authorities and track their resolution.
            </p>
            <div className="flex justify-start">
              <RegisterAccount />
            </div>
          </div>

          <div className="w-full lg:w-auto flex justify-center lg:justify-end animate-subtle-zoom pt-12 lg:pt-0 overflow-visible">
            <div className="flex justify-center items-center scale-[1.1] lg:scale-[1.3] origin-center mt-6 mb-10 w-full">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10 relative lg:scale-90 xl:scale-100 origin-right">
                {/* Left Icons */}
              <div className="flex flex-row md:flex-col gap-6 md:gap-12 relative z-20">
                <div className="flex flex-col items-center relative">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-red-500 shadow-md border border-gray-50 z-10 relative">
                    <FontAwesomeIcon icon={faRoad} className="text-xl" />
                  </div>
                  <span className="font-semibold text-gray-600 text-[11px] uppercase tracking-wide mt-2">Pothole</span>
                  <div className="hidden md:block absolute top-[1.5rem] left-[3rem] w-[30px] lg:w-[40px] h-[2px] bg-gradient-to-r from-gray-200 to-blue-300"></div>
                </div>
                <div className="flex flex-col items-center relative">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-500 shadow-md border border-gray-50 z-10 relative">
                    <FontAwesomeIcon icon={faTrash} className="text-xl" />
                  </div>
                  <span className="font-semibold text-gray-600 text-[11px] uppercase tracking-wide mt-2">Garbage</span>
                  <div className="hidden md:block absolute top-[1.5rem] left-[3rem] w-[30px] lg:w-[40px] h-[2px] bg-gradient-to-r from-gray-200 to-blue-300"></div>
                </div>
              </div>

              {/* Center Area */}
              <div className="flex flex-col items-center relative z-10">
                <div className="flex flex-col items-center relative mb-6 md:absolute md:-top-20 md:mb-0">
                  <span className="font-semibold text-gray-600 text-[11px] uppercase tracking-wide mb-2">Water</span>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-md border border-gray-50 z-10 relative">
                    <FontAwesomeIcon icon={faDroplet} className="text-xl" />
                  </div>
                  <div className="hidden md:block absolute top-[4.5rem] left-1/2 -translate-x-1/2 w-[2px] h-[20px] lg:h-[30px] bg-gradient-to-b from-gray-200 to-blue-300"></div>
                </div>
                
                <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-100 relative">
                  <img 
                    src={demoHero} 
                    alt="FixMyCity UI"
                    className="w-[160px] lg:w-[220px] rounded-lg object-contain transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl" 
                  />
                </div>
                <p className="text-[10px] sm:text-[11px] text-gray-500 font-semibold uppercase tracking-wider mt-5 text-center">
                  Multiple Problems <span className="mx-1">→</span> One Solution
                </p>
                <p className="text-xs mt-1 text-center font-bold text-gray-800 uppercase tracking-widest">
                  See it. <span className="text-blue-600">Report it.</span> Fix it.
                </p>
              </div>

              {/* Right Icons */}
              <div className="flex flex-row md:flex-col gap-6 md:gap-12 relative z-20">
                <div className="flex flex-col items-center relative">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-yellow-600 shadow-md border border-gray-50 z-10 relative">
                    <FontAwesomeIcon icon={faCarSide} className="text-xl" />
                  </div>
                  <span className="font-semibold text-gray-600 text-[11px] uppercase tracking-wide mt-2">Traffic</span>
                  <div className="hidden md:block absolute top-[1.5rem] right-[3rem] w-[30px] lg:w-[40px] h-[2px] bg-gradient-to-l from-gray-200 to-blue-300"></div>
                </div>
                <div className="flex flex-col items-center relative">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-yellow-400 shadow-md border border-gray-50 z-10 relative">
                    <FontAwesomeIcon icon={faLightbulb} className="text-xl" />
                  </div>
                  <span className="font-semibold text-gray-600 text-[11px] uppercase tracking-wide mt-2">Lighting</span>
                  <div className="hidden md:block absolute top-[1.5rem] right-[3rem] w-[30px] lg:w-[40px] h-[2px] bg-gradient-to-l from-gray-200 to-blue-300"></div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
