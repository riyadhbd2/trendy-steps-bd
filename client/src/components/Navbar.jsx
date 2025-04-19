import React from "react";
import { IoIosSearch } from "react-icons/io";
import logo from "../assets/logo-only.png";

const Navbar = () => {
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
          <ul className="flex gap-4">
            <li>Login</li>
            <li>Register</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
      {/* second part */}
      <div className="flex border border-b-1 ">
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
