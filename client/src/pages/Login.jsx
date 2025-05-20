import axios from "axios";
import { useContext, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StoreContext } from "../context/StoreContex";
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
      <div className="w-full max-w-md my-20 bg-white p-8 rounded-lg shadow-md border">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-medium text-gray-900">Login</h1>
            <p className="text-gray-500 text-sm mt-2">
              Please sign in to continue
            </p>
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <div className="flex items-center w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden px-6 gap-2">
              <AiOutlineMail />
              <input
                type="email"
                placeholder="Email id"
                className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-2">
            <div className="flex items-center w-full border border-gray-300/80 h-12 rounded-full overflow-hidden px-6 gap-2">
              <RiLockPasswordFill />
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                value={formData.email}
                className=" text-gray-500 outline-none text-sm w-full h-full"
                required
              />
            </div>
          </div>

          {error && <div className="text-sm text-red-500">Error: {error}</div>}

          {/* Forgot Password */}
          <div className="text-right mb-6">
            <p className="text-sm text-indigo-500 hover:text-indigo-700">
              <span className="cursor-pointer">Forgot password?</span>
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-11 rounded-full text-white bg-indigo-500 hover:bg-indigo-600 transition-colors duration-200"
          >
            Login
          </button>

          {/* Sign Up Link */}
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/register")}
                className="text-indigo-500 hover:text-indigo-700 cursor-pointer"
              >
                Sign up
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
