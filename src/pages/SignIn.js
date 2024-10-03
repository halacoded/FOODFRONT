import React from "react";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#344E41",
        fontFamily: "'Telugu MN', 'Arial', sans-serif",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          alignSelf: "flex-start",
          margin: "20px",
        }}
      >
        <h1
          style={{
            fontFamily: "'Telugu MN', sans-serif",
            fontSize: "24px",
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
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 0 20px rgba(0,0,0,0.2)",
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <p
            style={{
              marginBottom: "30px",
              color: "#344E41",
              fontSize: "20px",
              lineHeight: "1.5",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Welcome back! Let's whip up something fresh and delicious.
          </p>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <input type="text" placeholder="Username" style={inputStyle} />
            <input type="password" placeholder="Password" style={inputStyle} />
            <button
              type="submit"
              style={{
                backgroundColor: "#344E41",
                color: "white",
                border: "none",
                padding: "12px",
                borderRadius: "4px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "background-color 0.3s",
                fontWeight: "bold",
              }}
            >
              Sign In
            </button>
          </form>
          <p
            style={{
              fontSize: "14px",
              marginTop: "20px",
              color: "#344E41",
              textAlign: "center",
            }}
          >
            New here?{" "}
            <Link
              to="/SignUp"
              style={{
                color: "#344E41",
                textDecoration: "underline",
                fontWeight: "500",
              }}
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  fontFamily: "'Telugu MN', 'Arial', sans-serif",
  padding: "12px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "16px",
  width: "100%",
  boxSizing: "border-box",
};
