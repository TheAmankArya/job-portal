import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section - Brand Info */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-[#6A38C2] ">JOB_HUNT</h2>
          <p className="text-gray-500 text-sm mt-1">
            Find your dream job with ease! 🚀
          </p>
          <p className="text-gray-400 text-sm mt-1">
            © {new Date().getFullYear()} JOB_HUNT. All Rights Reserved.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">Jobs</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">Companies</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
        </div>

        {/* Right Section - Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-500 hover:text-blue-500 transition">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-pink-500 transition">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-400 transition">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-700 transition">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
