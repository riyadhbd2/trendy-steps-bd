import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Trendy Steps BD</h2>
          <p className="text-sm text-gray-400">
            Step into style with our premium collection of shoes for every
            occasion.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Men
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Women
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Kids
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                New Arrivals
              </a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shipping Info
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter or Social */}
        <div>
          <h3 className="font-semibold mb-3">Stay Connected</h3>
          <p className="text-sm text-gray-400 mb-3">
            Follow us on social media
          </p>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-pink-400">
              📸
            </a>
            <a href="#" className="hover:text-blue-600">
              📘
            </a>
            <a href="#" className="hover:text-red-500">
              ▶️
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} TrendySteps BD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
