import React from "react";
import { Outlet } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <Outlet />
    </UserProvider>
  );
}

export default App;
