import React from "react";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import logo from "../assets/logo-only.png";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* first part */}
      <div className="flex justify-between items-center py-2 px-20  border-b-1">
        <div className="flex items-center gap-4">
          <img className="w-14" src={logo} alt="" />
          <div>
            <h1 className="text-2xl font-semibold">TRENDY STEPS BD</h1>
            <p className="text-sm">A Reliable Shoe Brand</p>
          </div>
        </div>
        <div>
          <ul className="flex gap-4">
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-4 items-center">
            <li>
              <MdFavoriteBorder className="text-2xl" />
            </li>
            <li className="">
              <FiShoppingCart className="text-2xl" />
            </li>
            <li className="relative group incline-block">
              <CgProfile className="text-2xl text-gray-700 cursor-pointer" />
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-20">
                <p onClick={() => navigate("/login")} className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Login
                </p>
                <p className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </p>
                <p className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* second part */}
      <div className="flex border border-b-1">
        <div className="w-1/2 flex items-center px-20">
          <ul className="flex gap-12 ">
            <li>Shoes</li>
            <li>New</li>
            <li>Sale%</li>
            <li>Accessories</li>
            <li>Trends</li>
            <li>Brands</li>
            <li>Occasions</li>
          </ul>
        </div>
        <div className="flex justify-end w-1/2 px-20 py-4 relative">
          <IoIosSearch className="absolute left-20 top-7 ml-2 text-xl" />

          <input
            className="border w-full rounded-full h-10 px-10 focus:outline-none"
            type="search"
            name=""
            id=""
            placeholder="Find your favourite shoes"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
