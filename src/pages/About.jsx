import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/ui/Breadcrumb';

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 w-full bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
          
          <div>
            <Breadcrumb />
            <button onClick={() => navigate(-1)} className="text-sm text-gray-600 hover:text-gray-900 mb-4">← Back</button>
            <h1 className="text-3xl font-semibold text-gray-900">
              About FixMyCity
            </h1>
            <p className="text-gray-600 max-w-2xl mt-2">
              A simple platform to report and manage everyday city issues efficiently.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              FixMyCity is a civic issue reporting platform designed to help citizens quickly report everyday problems such as potholes, garbage, traffic congestion, water leakage, and streetlight failures.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The platform simplifies how city issues are managed by automatically assigning complaints to the appropriate departments and prioritizing them based on severity.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Users can track the status of their reports, while officials manage and resolve issues through a structured dashboard.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-medium text-gray-800">Report Issues Easily</p>
                <p className="text-sm text-gray-500 mt-1">Submit complaints quickly with details and location</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-medium text-gray-800">Track Status</p>
                <p className="text-sm text-gray-500 mt-1">Monitor progress from submission to resolution</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-medium text-gray-800">AI Priority System</p>
                <p className="text-sm text-gray-500 mt-1">Automatically prioritize important issues</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-medium text-gray-800">Duplicate Detection</p>
                <p className="text-sm text-gray-500 mt-1">Avoid multiple reports of the same issue</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-medium text-gray-800">Department Routing</p>
                <p className="text-sm text-gray-500 mt-1">Assign complaints to the correct department</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col gap-2">
            <p className="text-sm text-gray-500">Built By</p>
            <p className="text-lg font-medium text-gray-900">Tilak Rathi</p>
            <p className="text-sm text-gray-600">Building simple solutions for smarter cities.</p>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Made for smarter cities.
          </p>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
