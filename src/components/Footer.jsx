import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* 🔥 Logo + Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img src={logo} alt="FixMyCity" className="h-10 w-auto" />
              <span className="font-semibold text-white text-lg">
                Fix<span className="text-blue-500">MyCity</span>
              </span>
            </div>

            <p className="text-sm text-gray-500 max-w-xs">
              Helping citizens report city issues.
            </p>

            <a
              href="mailto:iamtilakrathi16@gmail.com"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors mt-1 inline-block"
            >
              iamtilakrathi16@gmail.com
            </a>
          </div>

          {/* 🔗 Links */}
          <div className="flex gap-6 text-sm">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-gray-300 text-xs uppercase tracking-wider mb-1">
                Links
              </span>

              <Link
                to="/report"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                Report Issue
              </Link>


              <Link
                to="/about"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                About
              </Link>
            </div>
          </div>
        </div>

        {/* 🔻 Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-5 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2026 FixMyCity</p>
          <div className="flex items-center gap-2">
            <p>Built by Tilak Rathi</p>
            <span className="text-gray-700 hidden sm:inline">•</span>
            <p>Made for smarter cities</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;