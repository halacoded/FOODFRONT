import React, { useState, useContext, useEffect, useCallback } from "react";
import { login } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const [user, setUser, loading] = useContext(UserContext);
  const navigate = useNavigate();

  const redirectToHome = useCallback(() => {
    if (user && !loading) {
      navigate("/home");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    redirectToHome();
  }, [redirectToHome]);

  const { mutate, isError, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: (userInfo) => login(userInfo),
    onSuccess: () => {
      setUser(true);
      redirectToHome();
    },
    onError: (error) => {
      console.error("Login error:", error);
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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-olive min-h-screen flex flex-col p-5">
      <Link to="/" className="text-white text-2xl mb-5 self-start">
        Olives & Herbs
      </Link>
      <div className="flex justify-center items-center flex-1">
        <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg flex flex-col items-center">
          <h2 className="text-olive text-2xl mb-5 text-center">Sign In</h2>
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
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              className="w-full p-3 rounded border border-gray-300 mb-4 text-left"
              onChange={handleChange}
            />
            {isError && (
              <p className="text-red-500 mb-4">
                {error.message || "An error occurred during sign in."}
              </p>
            )}
            <button
              type="submit"
              className="w-full p-3 bg-olive text-white border-none rounded cursor-pointer text-base mt-2 text-center"
            >
              Sign In
            </button>
          </form>
          <p className="text-olive text-sm mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-olive-light no-underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
