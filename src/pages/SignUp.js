import React from "react";
import { Link } from "react-router-dom"; // Add this import

export const SignUp = () => {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
          />
        </div>
        <div>
          <label htmlFor="profileImage">Profile Image:</label>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            accept="image/*"
          />
        </div>
        <div>
          <p style={{ textAlign: "left", fontSize: "12px", marginTop: "5px" }}>
            Already have an account?{" "}
            <Link
              to="/SignIn"
              className="text-blue-500 hover:text-sm hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
