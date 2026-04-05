import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Records from "./pages/Records";
import Users from "./pages/Users";
import Login from "./pages/Login";

const AppRoutes = () => {
  const role = localStorage.getItem("role");

  if (!role) {
    return <Login />;
  }

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      {(role === "admin" || role === "analyst") && (
        <Route path="/records" element={<Records />} />
      )}

      {role === "admin" && <Route path="/users" element={<Users />} />}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
