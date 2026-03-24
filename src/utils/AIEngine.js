// Simple AI heuristic for text classification
export const classifyIssue = (description) => {
  const text = description.toLowerCase();

  const rules = [
    {
      keywords: ["pothole", "crater", "road", "broken asphalt", "tyre", "hole"],
      category: "Pothole",
      priority: "High",
    },
    {
      keywords: ["garbage", "trash", "smell", "overflowing", "waste", "dump", "bin"],
      category: "Garbage",
      priority: "Medium",
    },
    {
      keywords: ["water", "leak", "pipe", "burst", "flooding", "drain", "sewage"],
      category: "Water Leakage",
      priority: "High",
    },
    {
      keywords: ["street", "light", "dark", "lamp", "bulb", "unlit"],
      category: "Streetlight",
      priority: "Medium",
    },
    {
      keywords: ["traffic", "jam", "signal", "accident", "congestion", "block"],
      category: "Traffic Issue",
      priority: "High",
    },
  ];

  let bestMatch = {
    category: "Others",
    priority: "Low",
    confidence: 0,
  };

  for (const rule of rules) {
    let matches = rule.keywords.filter((word) => text.includes(word)).length;
    if (matches > bestMatch.confidence) {
      bestMatch = {
        category: rule.category,
        priority: rule.priority,
        confidence: matches,
      };
    }
  }

  // Return the best match if confidence > 0, else return default
  if (bestMatch.confidence > 0) {
    return {
      category: bestMatch.category,
      priority: bestMatch.priority,
      suggestionsFound: true,
    };
  }

  return {
    category: "Others",
    priority: "Low",
    suggestionsFound: false,
  };
};

export const mockDetectImage = (file) => {
  return new Promise((resolve) => {
    // Simulate API delay for AI Image Analysis
    setTimeout(() => {
      resolve("Severity Analysis Complete: AI Detected potential structural damage.");
    }, 2000);
  });
};

export const assignAIPriority = (description) => {
  const text = description.toLowerCase();
  
  const highKeywords = ["pothole", "accident", "broken road", "water leakage", "electric hazard"];
  const mediumKeywords = ["garbage", "drainage", "streetlight issue"];
  const lowKeywords = ["noise", "minor issues"];
  
  if (highKeywords.some(kw => text.includes(kw))) return "High";
  if (mediumKeywords.some(kw => text.includes(kw))) return "Medium";
  if (lowKeywords.some(kw => text.includes(kw))) return "Low";
  
  return null;
};
