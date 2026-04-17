function Dashboard() {
  const cardStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    width: "200px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    textAlign: "center"
  };

  return (
    <div>

      {/* TITLE */}
      <h1 style={{ color: "#a855f7" }}>
        Re-Mmogo 💸
      </h1>

      <p style={{ marginBottom: "30px" }}>
        Welcome! Manage your group finances in style ✨
      </p>

      {/* CARDS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px"
      }}>

        <div style={cardStyle}>
          <h3>👥 Members</h3>
          <h2>24</h2>
        </div>

        <div style={cardStyle}>
          <h3>💰 Savings</h3>
          <h2>P 12,450</h2>
        </div>

        <div style={cardStyle}>
          <h3>🏦 Loans</h3>
          <h2>P 3,200</h2>
        </div>

        <div style={cardStyle}>
          <h3>⏳ Pending</h3>
          <h2>5</h2>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;