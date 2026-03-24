import localforage from "localforage";
import { Statuses, userTypes } from "./enums";
import { auth } from "./Firebase";
import { assignAIPriority } from "./AIEngine";

const generateId = () => Math.random().toString(36).substr(2, 9);

const getDepartment = (category) => {
  const map = {
    pothole: "Road Department",
    garbage: "Sanitation Department",
    traffic: "Traffic Department",
    water: "Water Supply Department",
    streetlight: "Electricity Department",
    others: "General Department",
  };
  return map[(category || "").toLowerCase()] || "General Department";
};

export const handleRegistration = async (formData) => {
  const users = (await localforage.getItem("users")) || [];
  const newUser = {
    uid: generateId(),
    name: formData.name,
    email: formData.email,
    password: formData.password,
    mobile: formData.mobile,
    type: userTypes.citizen,
  };
  users.push(newUser);
  await localforage.setItem("users", users);
  localStorage.setItem("currentUser", JSON.stringify(newUser));
  return newUser;
};

export const isOfficial = async (userId) => {
  const users = (await localforage.getItem("users")) || [];
  const user = users.find((u) => u.uid === userId);
  return user?.type === userTypes.official;
};

export const handleLogin = async (formData) => {
  let users = (await localforage.getItem("users")) || [];

  // Create default admin if doesn't exist
  if (!users.find(u => u.email === "iamtilakrathi16@gmail.com")) {
    const admin = {
      uid: "admin-Tilak",
      name: "Admin Official",
      email: "iamtilakrathi16@gmail.com",
      password: "Tilak@2502",
      mobile: "8830998981",
      type: userTypes.official
    };
    users.push(admin);
    await localforage.setItem("users", users);
  }

  const user = users.find((u) => u.email === formData.email && u.password === formData.password);
  if (!user) throw new Error("Invalid credentials");

  localStorage.setItem("currentUser", JSON.stringify(user));
  const official = await isOfficial(user.uid);
  return { ...user, official };
};

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve(null);
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const createComplaint = async (formData, media) => {
  const complaints = (await localforage.getItem("complaints")) || [];

  let mediaPath = "";
  if (media) {
    mediaPath = await convertToBase64(media);
  }

  const combinedText = (formData.title + " " + formData.description);
  const aiPriority = assignAIPriority(combinedText);
  const finalPriority = aiPriority || formData.priority || "Low";

  const department = getDepartment(formData.category);

  const newComplaint = {
    id: generateId(),
    title: formData.title,
    description: formData.description,
    category: formData.category,
    priority: finalPriority,
    isAIPriority: !!aiPriority,
    department: department,
    location: formData.location,
    image: mediaPath,
    mediaPath: mediaPath,
    status: Statuses.inProgress,
    createdAt: Date.now(),
    timestamp: Date.now(),
    reportedBy: formData.reportedBy,
    mediaType: formData.mediaType
  };

  complaints.push(newComplaint);
  await localforage.setItem("complaints", complaints);
};

export const fetchComplaintsByUser = (uid, handleComplaintsUpdate) => {
  const fetch = async () => {
    try {
      const complaintsStr = await localforage.getItem("complaints");
      let complaints = complaintsStr || [];
      if (!Array.isArray(complaints)) complaints = [];

      const userComplaints = complaints.filter((c) => c && c.reportedBy === uid);
      const commentsData = (await localforage.getItem("comments")) || {};

      const withComments = userComplaints.map(c => ({
        ...c,
        id: c.id,
        comments: commentsData[c.id] || []
      }));

      const priorityWeights = { "High": 3, "Medium": 2, "Low": 1 };
      withComments.sort((a, b) => {
        const pA = priorityWeights[a.priority] || 0;
        const pB = priorityWeights[b.priority] || 0;
        if (pA !== pB) return pB - pA;
        return b.timestamp - a.timestamp;
      });

      handleComplaintsUpdate(withComments);
    } catch (e) {
      console.error("fetchUserComplaints error", e);
      handleComplaintsUpdate([]);
    }
  };
  fetch();
  return () => { };
};

export const findComplaintAuthor = async (uid) => {
  const users = (await localforage.getItem("users")) || [];
  return users.find((u) => u.uid === uid) || null;
};

export const fetchComplaints = (handleComplaintsUpdate) => {
  const fetch = async () => {
    try {
      const complaintsStr = await localforage.getItem("complaints");
      let complaints = complaintsStr || [];
      if (!Array.isArray(complaints)) complaints = [];

      console.log("complaints", complaints); // requested debugging

      const usersStr = await localforage.getItem("users");
      let users = usersStr || [];
      if (!Array.isArray(users)) users = [];

      const commentsData = (await localforage.getItem("comments")) || {};

      const updatedComplaints = complaints.map(c => {
        const authorObj = users.find(u => u.uid === c.reportedBy);
        return {
          ...c,
          id: c.id,
          author: authorObj ? authorObj.name : "Unknown",
          comments: commentsData[c.id] || [],
          commentsUnsubscribe: () => { }
        };
      });

      const priorityWeights = { "High": 3, "Medium": 2, "Low": 1 };
      updatedComplaints.sort((a, b) => {
        const pA = priorityWeights[a.priority] || 0;
        const pB = priorityWeights[b.priority] || 0;
        if (pA !== pB) return pB - pA;
        return b.timestamp - a.timestamp;
      });

      handleComplaintsUpdate(updatedComplaints);
    } catch (e) {
      console.error("fetchComplaints error", e);
      handleComplaintsUpdate([]);
    }
  };
  fetch();
  return () => { };
};

export const addComment = async (complaintID, comment) => {
  const user = auth.currentUser;
  const commentsData = (await localforage.getItem("comments")) || {};
  if (!commentsData[complaintID]) {
    commentsData[complaintID] = [];
  }

  commentsData[complaintID].push({
    id: generateId(),
    author: user.uid,
    comment: comment,
    timestamp: Date.now()
  });

  await localforage.setItem("comments", commentsData);
};

export const fetchUserById = async (uid) => {
  const users = (await localforage.getItem("users")) || [];
  return users.find((u) => u.uid === uid);
};

export const markAsSolved = async (complaintID) => {
  const complaints = (await localforage.getItem("complaints")) || [];
  const index = complaints.findIndex(c => c.id === complaintID);
  if (index !== -1) {
    complaints[index].status = Statuses.solved;
    await localforage.setItem("complaints", complaints);
  }
};

export const markAsRejected = async (complaintID) => {
  const complaints = (await localforage.getItem("complaints")) || [];
  const index = complaints.findIndex(c => c.id === complaintID);
  if (index !== -1) {
    complaints[index].status = Statuses.rejected;
    await localforage.setItem("complaints", complaints);
  }
};