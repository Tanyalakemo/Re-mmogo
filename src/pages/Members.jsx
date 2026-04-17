import { useState } from "react";

export default function Members({ members = [], addMember }) {
  const [name, setName] = useState("");

  const thStyle = {
    border: "1px solid #ddd",
    padding: "10px",
    background: "#f3f4f6",
    textAlign: "left"
  };

  const tdStyle = {
    border: "1px solid #ddd",
    padding: "10px"
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Members</h2>

      {/* INPUT */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter member name"
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <button
        onClick={() => {
          if (!name.trim()) return;
          addMember(name);
          setName("");
        }}
        style={{
          padding: "8px 12px",
          background: "green",
          color: "white",
          border: "none"
        }}
      >
        Add Member
      </button>

      <hr style={{ margin: "20px 0" }} />

      <h3>Member List</h3>

      {/* TABLE */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Balance</th>
          </tr>
        </thead>

        <tbody>
          {(members || []).map((m) => (
            <tr key={m.id}>
              <td style={tdStyle}>{m.id}</td>
              <td style={tdStyle}>{m.name}</td>
              <td style={tdStyle}>P{m.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}