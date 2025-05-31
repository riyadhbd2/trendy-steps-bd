import { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { IoIosClose, IoIosSearch } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-only.png";
import { StoreContext } from "../context/StoreContex";

const Navbar = () => {
  const { isLoggedIn, logout, user } = useContext(StoreContext);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    "Shoes",
    "New",
    "Sale%",
    "Accessories",
    "Trends",
    "Brands",
    "Occasions",
  ];

  const dropdownContent = {
    Shoes: ["Sneakers", "Boots", "Heels"],
    New: ["Latest Arrivals", "Trending Now", "Editor's Pick"],
    "Sale%": ["50% Off", "Clearance", "Flash Deals"],
    Accessories: ["Bags", "Hats", "Watches"],
    Trends: ["Streetwear", "Minimal", "Bold Colors"],
    Brands: ["Nike", "Adidas", "Puma"],
    Occasions: ["Casual", "Formal", "Sport"],
  };

  // const slugify = (str) =>
  //   str.toLowerCase().replace(/[%']/g, "").replace(/\s+/g, "-");

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
              <h1 className="text-xl md:text-2xl font-bold hidden sm:block">
                TRENDY STEPS BD
              </h1>
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

          {/* Icons */}
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

      {/* Bottom Section - Shared Dropdown Menu */}
      <div className="hidden lg:block border-t border-gray-200">
        <div className="flex justify-between items-center px-20">
          {/* Menu Items */}
          <div className="relative" onMouseLeave={() => setHoveredItem(null)}>
            <ul
              className="flex gap-8 py-3 bg-white"
              onMouseEnter={() => hoveredItem || setHoveredItem(menuItems[0])}
            >
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="hover:text-blue-600 cursor-pointer transition-colors"
                  onMouseOver={() => setHoveredItem(item)} // Only this updates hovered item
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Shared Full-Width Dropdown */}
            {hoveredItem && (
              <div
                onMouseEnter={() => {}}
                onMouseLeave={() => setHoveredItem(null)}
                className="absolute left-0 top-full w-screen h-[50vh] bg-white border-t shadow-xl z-40 transition-all"
              >
                {/* Container to align links to the absolute left of the screen */}
                <div className="relative h-full">
                  <div className="absolute top-8 left-0 flex flex-col gap-4 max-w-xs px-4">
                    {dropdownContent[hoveredItem]?.map((subItem, i) => (
                      <p>
                        key={i}
                        className="text-lg text-gray-700 hover:text-blue-600
                        transition-colors"
                        {subItem}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Search */}
          <div className="relative w-96">
            <IoIosSearch className="absolute left-3 top-2.5 text-xl text-gray-400" />
            <input
              className="border w-full rounded-full h-10 pl-10 pr-4 focus:outline-none"
              type="search"
              placeholder="Find your favorite shoes"
            />
          </div>
        </div>

        {/* Shared Full-Width Dropdown */}
        {hoveredItem && (
          <div
            onMouseEnter={() => setHoveredItem(hoveredItem)}
            onMouseLeave={() => setHoveredItem(null)}
            className="absolute left-0 w-full h-[50vh] bg-white border-t shadow-xl z-40 transition-all"
          >
            <div className="flex flex-col px-20 mt-4 gap-2">
              {dropdownContent[hoveredItem]?.map((subItem, i) => (
                <p
                  key={i}
                  className=" text-gray-700 text-sm
                  transition-colors cursor-pointer"
                >
                  {subItem}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="px-4 py-3">
            <ul className="space-y-3">
              <li className="py-2 border-b border-gray-100">Women</li>
              <li className="py-2 border-b border-gray-100">Men</li>
              <li className="py-2 border-b border-gray-100">Kids</li>
              {menuItems.map((item) => (
                <li key={item} className="py-2 border-b border-gray-100">
                  {item}
                </li>
              ))}
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
