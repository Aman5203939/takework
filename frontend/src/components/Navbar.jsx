import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      background: "#111",
      padding: "15px",
      display: "flex",
      gap: "20px"
    }}>
      <Link to="/" style={{ color: "white" }}>Home</Link>
      <Link to="/login" style={{ color: "white" }}>Login</Link>
      <Link to="/register" style={{ color: "white" }}>Register</Link>
      <Link to="/dashboard" style={{ color: "white" }}>Dashboard</Link>
      <Link to="/admin" style={{ color: "white" }}>Admin</Link>
    </nav>
  );
}
