import React, { useState } from "react";
import { FaEdit } from "react-icons/fa"; // Make sure to install react-icons

export const Profile = () => {
  // Placeholder username - in a real app, this would come from your auth system
  const username = "User";

  // State for password
  const [password, setPassword] = useState("********"); // Placeholder password
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  // State for email
  const [email, setEmail] = useState("user@example.com"); // New state for email
  const [isEditingEmail, setIsEditingEmail] = useState(false); // New state for email editing

  // Handler for password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handler for email change
  const handleEmailChange = (e) => {
    // New handler for email change
    setEmail(e.target.value);
  };

  // Toggle editing state for password
  const toggleEditingPassword = () => {
    setIsEditingPassword(!isEditingPassword);
  };

  // Toggle editing state for email
  const toggleEditingEmail = () => {
    // New function to toggle email editing
    setIsEditingEmail(!isEditingEmail);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#344E41",
      }}
    >
      <div
        style={{
          width: "600px",
          // Remove fixed height
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <div style={{ width: "100%" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              color: "#344E41",
              marginBottom: "30px", // Increased margin for consistency
            }}
          >
            Hi, {username}
          </h1>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                color: "#344E41",
              }}
            >
              Username:
            </label>
            <input
              type="text"
              value={username}
              readOnly
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                color: "#344E41",
              }}
            >
              Email:
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                readOnly={!isEditingEmail}
                style={{
                  width: "100%",
                  padding: "10px",
                  paddingRight: "40px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <FaEdit
                onClick={toggleEditingEmail}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#344E41",
                }}
              />
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                color: "#344E41",
              }}
            >
              Password:
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                readOnly={!isEditingPassword}
                style={{
                  width: "100%",
                  padding: "10px",
                  paddingRight: "40px", // Make room for the icon
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <FaEdit
                onClick={toggleEditingPassword}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#344E41",
                }}
              />
            </div>
          </div>
        </div>
        <button
          onClick={toggleEditingPassword}
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            color: "white",
            backgroundColor: "#344E41",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Save & Exit
        </button>
      </div>
    </div>
  );
};
