import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Fetch the sellerId from localStorage (or wherever you store it)
      const sellerId = localStorage.getItem("sellerId");

      if (!sellerId) {
        console.error("Seller ID not found. Unable to log out.");
        return;
      }

      // Call the backend logout API
      const response = await axios.post("http://localhost:5001/admin/api/logout", { sellerId });

      if (response.data.success) {
        // Clear localStorage and navigate to login
        localStorage.removeItem("sellerId");
        navigate("/");
      } else {
        console.error("Logout failed:", response.data.error || "Unknown error");
      }
    } catch (error) {
      console.error("Error during logout:", error.response?.data?.error || error.message);
    }
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
