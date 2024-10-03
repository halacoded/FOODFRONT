import React from "react";

export const Landing = () => {
  const handleRegister = () => {
    console.log("Register button clicked");
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

      <nav
        style={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "1rem 1rem 1rem",
          marginTop: "1rem",
        }}
      >
        <a href="#" style={{ marginRight: "1rem", color: "white" }}>
          Explore
        </a>
        <a href="#" style={{ color: "white" }}>
          Sign in
        </a>
      </nav>

      <div style={{ display: "flex", flex: 1 }}>
        <main style={{ flex: 1, padding: "2rem", paddingLeft: "4rem" }}>
          <h1 style={{ fontFamily: "'Telugu MN', sans-serif" }}>
            Welcome to Olives & Thyme!
          </h1>
          <h2 style={{ fontFamily: "'Telugu MN', sans-serif" }}>
            Inspired by Nature, Made for You.
          </h2>

          <div>
            <p style={{ fontFamily: "'Telugu MN', sans-serif" }}>
              Nature-Inspired Recipes, Made from Scratch Explore a variety of
              wholesome, tried-and-true recipes for every season, special
              occasion, and celebration. Whether you're seeking to elevate your
              cooking skills or looking for a simple, reliable recipe, you've
              found your place in the kitchen.
            </p>
          </div>

          <button onClick={() => handleRegister()} style={{ color: "white" }}>
            Register
          </button>
        </main>

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingTop: "5%",
            paddingBottom: "15%",
          }}
        >
          <img
            src="/path/to/your/image.jpg"
            alt="Olives & Thyme"
            style={{
              width: "50%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
    </div>
  );
};
