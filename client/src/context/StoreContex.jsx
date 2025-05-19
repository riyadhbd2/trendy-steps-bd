import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = `${import.meta.env.VITE_BACKEND_URL}`;

  // Function to fetch user data
  // This function checks if the user is logged in and fetches their data
  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:5003/api/users/user", {
        withCredentials: true,
      });
      if (res.data.success) {
        setIsLoggedIn(true);
        setUser(res.data.user);
        setLoading(false);
      } else {
        setIsLoggedIn(false);
        setUser(null);
        setLoading(false);
      }
    } catch (err) {
      console.error("Error fetching user:", err);
      setIsLoggedIn(false);
      setUser(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser(); // Run on mount
  }, []);

  // Function to log out the user
  const logout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5003/api/users/logout",
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        setIsLoggedIn(false);
        alert(response.data.message);
      } else {
        alert("Logout failed");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const contextValue = {
    url,
    isLoggedIn,
    user,
    fetchUser,
    logout,
    loading,
    cart,
    error,
    setCart,
    setError,
    setLoading,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
