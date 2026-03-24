import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/Firebase";
import { isOfficial } from "../utils/FirebaseFunctions";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [Visible, setVisible] = useState(false);
  const [User, setUser] = useState(null);
  const [Official, setOfficial] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        isOfficial(user.uid).then((res) => {
          setOfficial(res);
        });
      }
    });

    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={`sticky top-0 z-50 w-full bg-white border-b border-gray-200 flex justify-between items-center px-5 py-3 lg:py-4 lg:px-10 transition-shadow duration-200 ${scrolled ? "shadow-md" : ""
          }`}
      >
        {/* 🔥 LOGO + TEXT */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="FixMyCity" className="h-8 w-auto" />
          <span className="font-semibold text-gray-800 text-lg">
            Fix<span className="text-blue-600">MyCity</span>
          </span>
        </Link>

        {User ? (
          <div className="gap-4 hidden lg:flex items-center">
            <Link
              to={Official ? "/official-dashboard" : "/citizen-dashboard"}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="text-sm font-medium text-red-500 hover:text-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="gap-3 hidden lg:flex items-center">
            <Link
              to="/official-login"
              className="text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full"
            >
              Official Login
            </Link>
            <Link
              to="/citizen-login"
              className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
            >
              Citizen Login
            </Link>
          </div>
        )}

        {/* Mobile Icon */}
        <FontAwesomeIcon
          className="lg:hidden cursor-pointer text-gray-600"
          icon={Visible ? faClose : faBars}
          onClick={() => setVisible(!Visible)}
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden w-full text-center py-12 absolute bg-white z-40 shadow-lg ${Visible ? "block" : "hidden"
          }`}
      >
        <ul className="flex flex-col gap-8 font-semibold text-gray-700">
          {User ? (
            <>
              <Link to={Official ? "/official-dashboard" : "/citizen-dashboard"}>
                Dashboard
              </Link>
              <Link onClick={handleLogout}>Logout</Link>
            </>
          ) : (
            <>
              <Link to="/citizen-login">Citizen Login</Link>
              <Link to="/official-login">Official Login</Link>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;