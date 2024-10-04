import React, { useState, useContext, useEffect } from "react";
import { register } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import { UserContext } from "../context/UserContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: (userInfo) => register(userInfo),
    onSuccess: (data) => {
      setUser(true);
      // No need to navigate here, the useEffect will handle it
    },
    onError: (error) => {
      console.error("Registration error:", error);
      // Handle error (e.g., show error message to user)
    },
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting userInfo:", userInfo);
    mutate(userInfo);
  };

  // Remove the if (user) check here, as it's handled by useEffect

  return (
    <div className="bg-olive min-h-screen flex flex-col p-5">
      <Link to="/" className="text-white text-2xl mb-5 self-start">
        Olives & Herbs
      </Link>
      <div className="flex justify-center items-center flex-1">
        <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg flex flex-col items-center">
          <h2 className="text-olive text-2xl mb-5 text-center">Register</h2>
          <form
            className="w-full flex flex-col items-center"
            onSubmit={handleFormSubmit}
          >
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
              className="w-full p-3 rounded border border-gray-300 mb-4 text-left"
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-3 rounded border border-gray-300 mb-4 text-left"
              onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              className="w-full p-3 rounded border border-gray-300 mb-4 text-left"
              onChange={handleChange}
            />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              className="w-full p-3 rounded border border-gray-300 mb-4 text-left"
              onChange={handleChange}
            />
            <p className="text-olive text-sm mb-4 text-center">
              Already have an account?{" "}
              <Link to="/SignIn" className="text-olive-light no-underline">
                Sign In
              </Link>
            </p>
            <button
              type="submit"
              className="w-full p-3 bg-olive text-white border-none rounded cursor-pointer text-base mt-2 text-center"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
