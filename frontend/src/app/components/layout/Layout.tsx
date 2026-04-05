import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Layout = ({ children }: { children: ReactNode }) => {
  const { role, isAdmin } = useAuth();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div style={{ width: 220, background: "#111827", color: "white", padding: 20 }}>
        <h2>Finance</h2>

        <div>
          <Link to="/">Dashboard</Link><br />
          <Link to="/records">Records</Link><br />
          {isAdmin && <Link to="/users">Users</Link>}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <div style={{ background: "white", padding: 10 }}>
          Role: {role}
        </div>

        <div style={{ padding: 20 }}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;