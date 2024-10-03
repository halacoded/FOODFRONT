import React from "react";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
        paddingTop: "40vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2 style={{ marginTop: "-40px", marginBottom: "20px" }}>Sign in</h2>
        <div style={{ marginBottom: "10px" }}>
          <input type="text" placeholder="Username" style={inputStyle} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input type="password" placeholder="Password" style={inputStyle} />
        </div>
        <p style={{ textAlign: "left", fontSize: "12px", marginTop: "5px" }}>
          New here? <></>
          <Link
            to="/SignUp"
            className="text-blue-500 hover:text-sm hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: "8px",
  fontSize: "16px",
  width: "200px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};
