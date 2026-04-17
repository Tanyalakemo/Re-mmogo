import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  const sidebarStyle = {
  width: "220px",
  minWidth: "220px",
  maxWidth: "220px",
  height: "100vh",
  background: "linear-gradient(180deg, #ff4da6, #a855f7)",
  color: "white",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  boxSizing: "border-box"
};

  const buttonStyle = {
    padding: "12px",
    margin: "5px 0",
    border: "none",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.2)",
    color: "white",
    cursor: "pointer",
    textAlign: "left"
  };

  
    return (
  <div style={{ display: "flex", minHeight: "100vh", margin: 0, padding: 0 }}>

      {/* SIDEBAR */}
      <div style={sidebarStyle}>
        <h2 style={{ marginBottom: "20px" }}>Re-Mmogo 💖</h2>

        <button style={buttonStyle} onClick={() => navigate("/dashboard")}>Dashboard</button>
        <button style={buttonStyle} onClick={() => navigate("/members")}>Members</button>
        <button style={buttonStyle} onClick={() => navigate("/contributions")}>Contributions</button>
        <button style={buttonStyle} onClick={() => navigate("/loans")}>Loans</button>
        <button style={buttonStyle} onClick={() => navigate("/approvals")}>Approvals</button>
        <button style={buttonStyle} onClick={() => navigate("/reports")}>Reports</button>
        <button style={buttonStyle} onClick={() => navigate("/register-group")}>Register Group</button>

        <div style={{ marginTop: "auto" }}>
          <button
            style={{ ...buttonStyle, background: "#ff1a75" }}
            onClick={() => navigate("/")}
          >
            Logout
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{
        flex: 1,
        marginLeft: "220px",
        minHeight: "100vh",
        background: "#fff0f6",
        padding: "30px",
        boxSizing: "border-box",
        overflowX: "hidden"
      }}>
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;