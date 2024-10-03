import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../fonts.css";

export const SignUp = () => {
  const [fileName, setFileName] = useState("No file chosen");

  const commonStyles = {
    fontFamily: "'Telugu MN', sans-serif",
    color: "#344E41",
  };

  const inputStyles = {
    ...commonStyles,
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #D3D3D3",
    backgroundColor: "#FFFFFF",
    marginBottom: "15px",
    textAlign: "left",
  };

  const fileInputStyles = {
    ...commonStyles,
    display: "inline-block",
    padding: "8px 12px",
    cursor: "pointer",
    backgroundColor: "#DAD7CD",
    color: "#344E41",
    borderRadius: "4px",
    border: "1px solid #D3D3D3",
    fontSize: "14px",
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "No file chosen");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div
      style={{
        backgroundColor: "#344E41",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <h1
          style={{
            fontFamily: "'Telugu MN', sans-serif",
            fontSize: "24px",
            marginBottom: "20px",
            alignSelf: "flex-start",
            color: "#FFFFFF",
            cursor: "pointer",
          }}
        >
          Olives & Herbs
        </h1>
      </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            padding: "30px",
            width: "100%",
            maxWidth: "400px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              ...commonStyles,
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Register
          </h2>
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
              style={inputStyles}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              style={inputStyles}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              style={inputStyles}
            />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              style={inputStyles}
            />
            <div
              style={{
                width: "100%",
                textAlign: "center",
                marginBottom: "15px",
              }}
            >
              <label htmlFor="profileImage" style={fileInputStyles}>
                Choose File
              </label>
              <input
                type="file"
                id="profileImage"
                name="profileImage"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <div
                style={{
                  marginTop: "5px",
                  fontSize: "12px",
                  color: "#344E41",
                  opacity: 0.7,
                }}
              >
                {fileName}
              </div>
            </div>
            <p
              style={{
                ...commonStyles,
                fontSize: "14px",
                margin: "15px 0",
                textAlign: "center",
              }}
            >
              Already have an account?{" "}
              <Link
                to="/SignIn"
                style={{
                  ...commonStyles,
                  color: "#A3B18A",
                  textDecoration: "none",
                }}
              >
                Sign In
              </Link>
            </p>
            <button
              type="submit"
              style={{
                ...commonStyles,
                width: "100%",
                padding: "10px",
                backgroundColor: "#2D4A38",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "16px",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
