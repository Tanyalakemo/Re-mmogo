import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={{
      height: "100vh",
      background: "linear-gradient(135deg, #10102e, #050710, #8610c1)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center", 
      alignItems: "center",
      textAlign: "center",
      color: "#4b004b"
    }}>

      
      <h1 style={{
        fontSize: "80px",
        fontStyle: "revert",
        marginBottom: "10px",
        fontWeight: "bold"
      }}>
        Re Mmogo 
      </h1>

      
      <p style={{
        fontSize: "22px",
        fontStyle: "italic",
        marginBottom: "30px",
        maxWidth: "400px"
      }}>
        Save together, grow together, and manage your money in style.
      </p>

      
      <div style={{ display: "flex", gap: "20px" }}>

        
        <button
          onClick={() => navigate("/login")}
          style={{
            padding: "16px 26px",
            background: "#6366f1", // deep blue
            border: "none",
            color: "white",
            borderRadius: "25px",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
          }}
        >
          Login
        </button>

        
        <button
          onClick={() => navigate("/register-group")}
          style={{
            padding: "16px 26px",
            background: "#a855f7", // bright purple
            border: "none",
            color: "white",
            borderRadius: "25px",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
          }}
        >
          Get Started
        </button>

      </div>

    </div>
  );
}

export default LandingPage;