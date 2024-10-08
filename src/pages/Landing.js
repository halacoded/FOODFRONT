import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen bg-olive text-white font-telugu">
      <header className="p-4 flex justify-between items-start">
        <div className="text-2xl font-bold">Olives & Herbs</div>
        <Link
          to="/profile"
          className="text-white hover:text-gray-300 mt-4 mr-6"
        >
          <FaUser size={28} />
        </Link>
      </header>

      <Outlet />
      <nav className="flex justify-start p-4 mt-4">
        <Link to="/home" className="mr-4 text-white hover:underline">
          Explore
        </Link>
        <Link to="/SignIn" className="mr-4 text-white hover:underline">
          Sign in
        </Link>
      </nav>

      <div className="flex flex-1 max-w-7xl mx-auto">
        <main className="flex-1 p-8 pt-32 flex flex-col justify-between">
          <div>
            <h1 className="mb-6 text-4xl">Welcome to Olives & Herbs!</h1>
            <h2 className="mb-10 text-2xl">
              Inspired by Nature, Made for You.
            </h2>

            <p className="leading-relaxed tracking-wide max-w-4/5 mb-8 text-lg">
              Nature-Inspired Arabic Recipes, Made from Scratch. Explore a
              variety of wholesome, authentic Middle Eastern dishes for every
              season, special occasion, and celebration. Whether you're looking
              to elevate your cooking skills or seeking a simple, traditional
              recipe, you've found your place in the kitchen.
            </p>
          </div>

          <Link to="/SignUp" className="text-white mt-8 hover:underline">
            Register
          </Link>
        </main>
      </div>

      <footer className="py-3 px-6 flex justify-center items-center text-sm">
        <div className="flex justify-between items-center w-1/3 max-w-md">
          <div>&copy; 2024-2025 Olives & Thyme.</div>
          <div className="flex">
            <Link
              to="/about"
              className="text-white no-underline hover:underline transition-all duration-300"
            >
              About
            </Link>
            <span className="mx-2"></span>
            <Link
              to="/terms"
              className="text-white no-underline hover:underline transition-all duration-300"
            >
              Terms
            </Link>
          </div>
          <div className="flex gap-2">
            {/* Placeholder for social media icons */}
            <span>FB</span>
            <span>TW</span>
            <span>IG</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
