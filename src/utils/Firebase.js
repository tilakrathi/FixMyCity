// LocalForage-based auth stub that mimics Firebase Auth API
const db = {};
const storage = {};

const auth = {
  // Calls cb synchronously with current user, returns a no-op unsubscribe fn
  onAuthStateChanged: (cb) => {
    try {
      const storedUser = localStorage.getItem('currentUser');
      const user = storedUser ? JSON.parse(storedUser) : null;
      cb(user);
    } catch (e) {
      console.error("Auth state parsing error:", e);
      cb(null);
    }
    // Return unsubscribe function (no-op since this is synchronous)
    return () => {};
  },
  signOut: () => {
    localStorage.removeItem('currentUser');
  },
  get currentUser() {
    try {
      const storedUser = localStorage.getItem('currentUser');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (e) {
      return null;
    }
  }
};

export { db, auth, storage };
