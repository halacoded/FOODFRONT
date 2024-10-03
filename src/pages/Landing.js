import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

export const Landing = () => {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    transition: "text-decoration 0.3s ease",
  };

  const hoverStyle = {
    textDecoration: "underline",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#344E41",
        color: "white",
        fontFamily: "'Telugu MN', sans-serif",
      }}
    >
      <header
        style={{
          padding: "1rem 2rem",
          fontSize: "1.5rem",
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        Olives & Herbs
      </header>

      <Outlet />
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "1rem 1rem 1rem",
          marginTop: "1rem",
        }}
      >
        <Link to="#" style={{ marginRight: "1rem", color: "white" }}>
          Explore
        </Link>
        <Link to="/SignIn" style={{ color: "white" }}>
          Sign in
        </Link>
      </nav>

      <div
        style={{
          display: "flex",
          flex: 1,
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <main
          style={{
            flex: "0 0 50%",
            padding: "2rem",
            paddingLeft: "4rem",
            paddingTop: "8rem",
            paddingRight: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: "'Telugu MN', sans-serif",
                marginBottom: "1.5rem",
                fontSize: "2.5rem",
              }}
            >
              Welcome to Olives & Herbs!
            </h1>
            <h2
              style={{
                fontFamily: "'Telugu MN', sans-serif",
                marginBottom: "2.5rem",
                fontSize: "1.6rem",
              }}
            >
              Inspired by Nature, Made for You.
            </h2>

            <p
              style={{
                fontFamily: "'Telugu MN', sans-serif",
                lineHeight: "1.4",
                letterSpacing: "0.01em",
                maxWidth: "80%",
                marginBottom: "2rem",
                fontSize: "1.32em", // Increased font size by 2%
              }}
            >
              Nature-Inspired Recipes, Made from Scratch. Explore a variety of
              wholesome, tried-and-true recipes for every season, special
              occasion, and celebration. Whether you're seeking to elevate your
              cooking skills or looking for a simple, reliable recipe, you've
              found your place in the kitchen.
            </p>
          </div>

          <Link to="/SignUp" style={{ color: "white", marginTop: "2rem" }}>
            Register
          </Link>
        </main>

        <div
          style={{
            flex: "0 0 50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center", // Changed from flex-end to center
            paddingRight: "4rem",
            paddingBottom: "5rem", // Added padding to the bottom
          }}
        >
          <img
            src="https://i.pinimg.com/564x/30/d4/42/30d44233f5e6601ff119bb9a70c0092e.jpg"
            alt="Olives & Herbs"
            style={{
              width: "60%",
              height: "auto",
              maxHeight: "70vh", // Reduced from 80vh to 70vh
              objectFit: "cover",
              borderRadius: "20px",
              opacity: 0.95,
            }}
          />
        </div>
      </div>

      <footer
        style={{
          padding: "0.75rem 1.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "0.8rem", // Slightly reduced font size
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "28%", // Slightly reduced
            maxWidth: "380px", // Slightly reduced
          }}
        >
          <div>&copy; 2024-2025 Olives & Thyme.</div>
          <div style={{ display: "flex" }}>
            <Link
              to="/about"
              style={linkStyle}
              onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
            >
              About
            </Link>
            <span style={{ margin: "0 0.5rem" }}></span>
            <Link
              to="/terms"
              style={linkStyle}
              onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
            >
              Terms
            </Link>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
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
