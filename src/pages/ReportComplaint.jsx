import styled from "@emotion/styled";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { LocationSearching } from "@mui/icons-material";
import { Box, ButtonBase, Checkbox, FormControlLabel, Radio, RadioGroup, Select, MenuItem, FormControl } from "@mui/material";
import MuiTextField from "@mui/material/TextField";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import DashboardLinkButton from "../components/DashboardLinkButton";
import Navbar from "../components/Navbar";
import SpinnerModal from "../components/SpinnerModal";
import { auth, storage } from "../utils/Firebase";
import { createComplaint, isOfficial } from "../utils/FirebaseFunctions";
import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import Breadcrumb from "../components/Breadcrumb";
import { identifyLocation } from "../utils/MiscFunctions";
import { Statuses } from "../utils/enums";
import { GlassCard } from "../components/ui/GlassCard";
import { GradientButton } from "../components/ui/GradientButton";
import { classifyIssue } from "../utils/AIEngine";
import Footer from "../components/Footer";
import localforage from "localforage";

const TextField = styled(MuiTextField)((props) => ({
  width: "80%",
  [`& fieldset`]: {
    borderRadius: "15px",
  },
}));
const ReportComplaint = () => {
  const [Media, setMedia] = useState();
  const [MediaPath, setMediaPath] = useState("");
  const [FormData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    priority: "",
    location: {
      name: "",
      lat: "",
      lng: "",
    },
    image: "",
    status: Statuses.inProgress,
    createdAt: "",
    reportedBy: "",
    mediaType: "",
  });
  const [LoaderVisibile, setLoaderVisibile] = useState(false);
  const [AiSuggestion, setAiSuggestion] = useState(null);
  const [DuplicateCheck, setDuplicateCheck] = useState(null);
  const [ForceSubmit, setForceSubmit] = useState(false);
  const FileInput = useRef(null);
  const navigate = useNavigate();

  // Smart AI watcher for the description field
  useEffect(() => {
    if (FormData.description.length > 10) {
      const match = classifyIssue(FormData.description);
      if (match.suggestionsFound) {
        setAiSuggestion(match);
      } else {
        setAiSuggestion(null);
      }
    } else {
      setAiSuggestion(null);
    }
  }, [FormData.description]);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        return navigate("/");
      }
      setFormData({ ...FormData, reportedBy: user.uid });
    });
  }, []);
  return (
    <div className="overflow-x-hidden">
      <SpinnerModal visible={LoaderVisibile} />
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
      <div className="container mx-auto px-4 max-w-2xl my-10">
        <Breadcrumb />
        <button onClick={() => navigate(-1)} className="text-sm text-gray-600 hover:text-gray-900 mb-4">← Back</button>
        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          <div className="text-center mb-6">
            <h2 className="font-bold text-xl lg:text-2xl text-gray-800">
              Report a City Issue
            </h2>
            <p className="text-gray-500 text-sm mt-1">Help improve your area by reporting problems around you.</p>
          </div>

          <form
            onSubmit={async (e) => {
              e.preventDefault();

              if (!FormData.location.name.trim()) {
                toast.error("Please enter or select a location");
                return;
              }

              const submitComplaint = () => {
                setLoaderVisibile(true);
                createComplaint(FormData, Media)
                  .then(() => {
                    toast.success("Complaint Reported Successfully");
                    setTimeout(() => navigate("/citizen-dashboard"), 3000);
                  })
                  .finally(() => setLoaderVisibile(false))
                  .catch((err) => toast.error(err.message));
              };

              if (!ForceSubmit) {
                setLoaderVisibile(true);
                try {
                  const complaintsStr = await localforage.getItem("complaints");
                  let allComplaints = complaintsStr || [];
                  if (!Array.isArray(allComplaints)) allComplaints = [];

                  const getWords = (str) => String(str).toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/).filter(w => w.length > 3);
                  const currWords = getWords(FormData.title + " " + FormData.description);
                  const currLoc = FormData.location?.name?.toLowerCase() || "";

                  const duplicates = allComplaints.filter(c => {
                    const existingWords = getWords(c.title + " " + c.description);
                    const matchCount = currWords.filter(w => existingWords.includes(w)).length;
                    const existingLoc = (c.location?.name || "").toLowerCase();
                    const locMatch = currLoc === existingLoc || (currLoc.length > 5 && existingLoc.includes(currLoc.substring(0, 10)));
                    return locMatch && matchCount >= 2;
                  });

                  setLoaderVisibile(false);

                  if (duplicates.length > 0) {
                    setDuplicateCheck(duplicates);
                    return;
                  }
                } catch (err) {
                  setLoaderVisibile(false);
                }
              }
              submitComplaint();
            }}
            className="flex flex-col gap-6"
          >
            <input
              required
              type="file"
              ref={FileInput}
              className="hidden"
              accept="image/*, video/*"
              onChange={(e) => {
                setMedia(e.target.files[0]);
                setFormData({
                  ...FormData,
                  mediaType: e.target.files[0].type.split("/")[0],
                });
                setMediaPath(URL.createObjectURL(e.target.files[0]));
              }}
              name=""
              id=""
            />
            
            <div className="w-full flex justify-center">
              <DashboardLinkButton
                className={`${Media ? "hidden" : "block"} w-full md:w-2/3 border-dashed border-2`}
                icon={faCamera}
                name={"Upload a picture/video of incident"}
                onClick={() => FileInput.current.click()}
                subtitle={"AI may analyze image severity once uploaded."}
              />
            </div>

            {Media && (
              <div className="flex flex-col justify-center items-center py-4 bg-slate-50 rounded-xl">
                {FormData.mediaType === "image" ? (
                  <img src={MediaPath} alt="Uploaded Media" className="max-w-full h-64 object-contain rounded-lg shadow-sm" />
                ) : (
                  <video controls src={MediaPath} className="max-w-full h-64 object-contain rounded-lg shadow-sm"></video>
                )}
                <button
                  type="button"
                  onClick={() => FileInput.current.click()}
                  className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-800"
                >
                  Change Media
                </button>
              </div>
            )}

            <Box className="flex flex-col gap-5">
              <div>
                <p className="font-semibold text-slate-700 mb-2">Location</p>
                <TextField
                  variant="outlined"
                  value={FormData.location.name}
                  required
                  placeholder="Enter exact location (street, area, landmark)"
                  className="w-full bg-white"
                  onChange={(e) =>
                    setFormData({
                      ...FormData,
                      location: { ...FormData.location, name: e.target.value },
                    })
                  }
                  InputProps={{
                    endAdornment: (
                      <ButtonBase
                        onClick={async () => {
                          let locationRes = await identifyLocation();
                          setFormData({ ...FormData, location: locationRes });
                        }}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                        title="Use current GPS location"
                      >
                        <LocationSearching />
                      </ButtonBase>
                    ),
                  }}
                />
                <p className="text-xs text-gray-500 mt-1.5 ml-1">Tip: Add a landmark for better accuracy. Click the icon to auto-detect your location.</p>
              </div>

              <div>
                <p className="font-semibold text-slate-700 mb-2">Issue Title</p>
                <TextField
                  required
                  variant="outlined"
                  value={FormData.title}
                  onChange={(e) => setFormData({ ...FormData, title: e.target.value })}
                  placeholder="E.g. Large pothole on Main St."
                  className="w-full bg-white"
                />
              </div>

              <div>
                <p className="font-semibold text-slate-700 mb-2">Detailed Description</p>
                <TextField
                  required
                  multiline
                  value={FormData.description}
                  onChange={(e) => setFormData({ ...FormData, description: e.target.value })}
                  rows={4}
                  placeholder="Describe the issue in detail. AI will auto-categorize it..."
                  className="w-full bg-white"
                />
              </div>

              {/* AI Auto-Categorization Prompt */}
              {AiSuggestion && (
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-blue-800">AI Suggestion</p>
                    <p className="text-xs text-blue-600">Detected: <b>{AiSuggestion.category}</b> — <b>{AiSuggestion.priority}</b> priority</p>
                  </div>
                  <button 
                    type="button"
                    onClick={() => {
                      setFormData({ 
                        ...FormData, 
                        category: AiSuggestion.category, 
                        priority: AiSuggestion.priority 
                      });
                      setAiSuggestion(null);
                      toast.success("Applied AI classification!");
                    }}
                    className="text-xs font-semibold bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Apply
                  </button>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-slate-700 mb-2">Category</p>
                  <FormControl fullWidth className="bg-white">
                    <Select
                      required
                      value={FormData.category}
                      displayEmpty
                      onChange={(e) => setFormData({ ...FormData, category: e.target.value })}
                      sx={{ borderRadius: "10px" }}
                    >
                      <MenuItem value="" disabled>Select Category</MenuItem>
                      <MenuItem value="Pothole">Pothole</MenuItem>
                      <MenuItem value="Garbage">Garbage</MenuItem>
                      <MenuItem value="Water Leakage">Water Leakage</MenuItem>
                      <MenuItem value="Streetlight">Streetlight</MenuItem>
                      <MenuItem value="Traffic Issue">Traffic Issue</MenuItem>
                      <MenuItem value="Others">Others</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div>
                  <p className="font-semibold text-slate-700 mb-2">Priority</p>
                  <RadioGroup
                    row
                    onChange={(e) => setFormData({ ...FormData, priority: e.target.value })}
                    value={FormData.priority}
                  >
                    <FormControlLabel value="Low" control={<Radio color="success" />} label="Low" />
                    <FormControlLabel value="Medium" control={<Radio color="warning" />} label="Medium" />
                    <FormControlLabel value="High" control={<Radio color="error" />} label="High" />
                  </RadioGroup>
                </div>
              </div>

              <div className="mt-4">
                <FormControlLabel
                  required
                  value="terms-accepted"
                  control={<Checkbox />}
                  label={<span className="text-sm text-slate-600">I confirm these details are accurate and acknowledge false reports may lead to action.</span>}
                />
              </div>
            </Box>

            {DuplicateCheck && DuplicateCheck.length > 0 && (
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg flex flex-col gap-3 mt-2">
                <div>
                   <p className="text-sm font-semibold text-yellow-800">Similar issue already reported in this area.</p>
                   <p className="text-xs text-yellow-700">{DuplicateCheck.length} similar issue(s) found nearby.</p>
                </div>
                <div className="flex gap-3 mt-1">
                  <button type="button" onClick={() => navigate("/citizen-dashboard")} className="text-xs font-semibold bg-white border border-yellow-300 text-yellow-800 px-3 py-1.5 rounded-md hover:bg-yellow-100 transition-colors">
                    View Existing
                  </button>
                  <button type="button" onClick={() => { setDuplicateCheck(null); setForceSubmit(true); }} className="text-xs font-semibold bg-yellow-600 text-white px-3 py-1.5 rounded-md hover:bg-yellow-700 transition-colors">
                    Submit Anyway
                  </button>
                </div>
              </div>
            )}
            
            <div className="flex justify-center mt-6">
              <GradientButton type="submit" className="w-full md:w-1/2 py-3">
                Submit Report
              </GradientButton>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReportComplaint;
