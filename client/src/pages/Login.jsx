import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContex";
import { toast } from 'react-toastify';

const Login = () => {
  const { fetchUser, error, setError } = useContext(StoreContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form Data:", formData);
      
      const response = await axios.post(
        "http://localhost:5003/api/users/login",
        formData,
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      if (response.data.success) {
        await fetchUser();
        toast.success(`${response.data.message}`);
        navigate("/");
      } else {
        toast.error(`${response.data.message}`);
        setError(`${response.data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error?.response?.data?.message || "Something went wrong");
      
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full h-full my-20 max-w-md bg-white p-8 rounded-lg shadow-md border">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {error && <div className="text-sm text-red-500">Error: {error}</div>}

          <p>
            Didn't register yet?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-red-500 text-sm cursor-pointer"
            >
              Register
            </span>
          </p>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
