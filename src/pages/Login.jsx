import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      navigate("/dashboard");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div style={{
      height: "100vh",
      background: "linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>

      {/* LOGIN CARD */}
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "20px",
        width: "320px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        textAlign: "center"
      }}>

        <h2 style={{ marginBottom: "20px", color: "#a855f7" }}>
          Welcome! Please log in
        </h2>

        {/* USERNAME */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "10px",
            border: "1px solid #ddd"
          }}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "1px solid #ddd"
          }}
        />

        {/* LOGIN BUTTON */}
        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            background: "#ff4da6",
            color: "white",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
          }}
        >
          Login
        </button>

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/")}
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "10px",
            background: "transparent",
            border: "none",
            color: "#a855f7",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          ← Back to Home
        </button>

      </div>

    </div>
  );
}

export default Login;