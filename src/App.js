import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Contributions from "./pages/Contributions";
import Loans from "./pages/Loans";
import Approvals from "./pages/Approvals";
import Reports from "./pages/Reports";
import RegisterGroup from "./pages/RegisterGroup";

function App() {
  return (
    <Router>
      <Routes>

        {/* 🌍 PUBLIC */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />

        {/* 🔐 APP (WITH NAVBAR LAYOUT) */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/members" element={<Members />} />
          <Route path="/contributions" element={<Contributions />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/approvals" element={<Approvals />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/register-group" element={<RegisterGroup />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;