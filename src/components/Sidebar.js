import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Re-Mmogo</h2>

      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/register-group">Register Group</Link>
        <Link to="/members">Members</Link>
        <Link to="/contributions">Contributions</Link>
        <Link to="/loans">Loans</Link>
        <Link to="/approvals">Approvals</Link>
        <Link to="/reports">Reports</Link>
      </nav>
    </div>
  );
}

export default Sidebar;