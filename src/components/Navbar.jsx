import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      padding: "10px",
      background: "#2c3e50",
      color: "white",
      display: "flex",
      gap: "20px"
    }}>
      <h2>Re-Mmogo</h2>

      <Link to="/" style={{ color: "white" }}>Dashboard</Link>
      <Link to="/members" style={{ color: "white" }}>Members</Link>
    </nav>
  );
}

export default Navbar;