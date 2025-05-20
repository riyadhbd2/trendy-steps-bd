import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { IoIosSearch, IoIosClose } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-only.png";
import { StoreContext } from "../context/StoreContex";
import { useState } from "react";

const Navbar = () => {
  const { isLoggedIn, logout, user } = useContext(StoreContext);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Section */}
      <div className="px-4 sm:px-6 lg:px-20 bg-gray-100">
        <div className="flex justify-between items-center py-3">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <button 
              className="lg:hidden mr-4 text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <IoIosClose /> : <FiMenu />}
            </button>
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img className="w-10 md:w-12" src={logo} alt="Trendy Steps BD" />
              <h1 className="text-xl md:text-2xl font-bold hidden sm:block">TRENDY STEPS BD</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <ul className="flex gap-6">
              <li className="hover:text-blue-600 transition-colors">Women</li>
              <li className="hover:text-blue-600 transition-colors">Men</li>
              <li className="hover:text-blue-600 transition-colors">Kids</li>
            </ul>
          </div>

          {/* Icons - Search, Favorites, Cart, Profile */}
          <div className="flex items-center gap-4 md:gap-6">
            <button 
              className="lg:hidden text-xl"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <IoIosSearch />
            </button>
            
            <div className="hidden lg:flex items-center gap-6">
              <MdFavoriteBorder className="text-xl cursor-pointer hover:text-blue-600 transition-colors" />
              <FiShoppingCart className="text-xl cursor-pointer hover:text-blue-600 transition-colors" />
              <div className="relative group">
                <CgProfile className="text-xl text-gray-700 cursor-pointer hover:text-blue-600 transition-colors" />
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-20">
                  {isLoggedIn && user ? (
                    <>
                      <p
                        onClick={() => navigate("/orders")}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Orders
                      </p>
                      <p
                        onClick={() => navigate("/profile")}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Profile
                      </p>
                      <p
                        onClick={() => logout()}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Logout
                      </p>
                    </>
                  ) : (
                    <p
                      onClick={() => navigate("/login")}
                      className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Login / Register
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Icons */}
            <div className="flex lg:hidden items-center gap-4">
              <MdFavoriteBorder className="text-xl cursor-pointer hover:text-blue-600 transition-colors" />
              <FiShoppingCart className="text-xl cursor-pointer hover:text-blue-600 transition-colors" />
              <CgProfile 
                className="text-xl cursor-pointer hover:text-blue-600 transition-colors" 
                onClick={() => navigate(isLoggedIn ? "/profile" : "/login")}
              />
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="lg:hidden my-3 relative">
            <IoIosSearch className="absolute left-3 top-3 text-xl text-gray-400" />
            <input
              className="border w-full rounded-full h-10 pl-10 pr-4 focus:outline-none"
              type="search"
              placeholder="Find your favorite shoes"
            />
          </div>
        )}
      </div>

      {/* Bottom Section - Desktop */}
      <div className="hidden lg:flex border-t border-gray-200 px-20">
        <div className="flex justify-between w-full">
          <ul className="flex gap-8 py-3">
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Shoes</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">New</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Sale%</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Accessories</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Trends</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Brands</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Occasions</li>
          </ul>
          <div className="flex items-center relative w-96"> {/* Increased width */}
            <IoIosSearch className="absolute left-3 text-xl text-gray-400" />
            <input
              className="border w-full rounded-full h-10 pl-10 pr-4 focus:outline-none"
              type="search"
              placeholder="Find your favorite shoes"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="px-4 py-3">
            <ul className="space-y-3">
              <li className="py-2 border-b border-gray-100">Women</li>
              <li className="py-2 border-b border-gray-100">Men</li>
              <li className="py-2 border-b border-gray-100">Kids</li>
              <li className="py-2 border-b border-gray-100">Shoes</li>
              <li className="py-2 border-b border-gray-100">New</li>
              <li className="py-2 border-b border-gray-100">Sale%</li>
              <li className="py-2 border-b border-gray-100">Accessories</li>
              <li className="py-2 border-b border-gray-100">Trends</li>
              <li className="py-2 border-b border-gray-100">Brands</li>
              <li className="py-2">Occasions</li>
            </ul>

            {/* Profile dropdown for mobile */}
            {isLoggedIn && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p
                  onClick={() => navigate("/orders")}
                  className="block py-2 hover:bg-gray-100 cursor-pointer px-2"
                >
                  Orders
                </p>
                <p
                  onClick={() => navigate("/profile")}
                  className="block py-2 hover:bg-gray-100 cursor-pointer px-2"
                >
                  Profile
                </p>
                <p
                  onClick={() => logout()}
                  className="block py-2 hover:bg-gray-100 cursor-pointer px-2"
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;