import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
const Layout = ({ children }) => {
    const { role, isAdmin } = useAuth();
    return (_jsxs("div", { style: { display: "flex", height: "100vh" }, children: [_jsxs("div", { style: { width: 220, background: "#111827", color: "white", padding: 20 }, children: [_jsx("h2", { children: "Finance" }), _jsxs("div", { children: [_jsx(Link, { to: "/", children: "Dashboard" }), _jsx("br", {}), _jsx(Link, { to: "/records", children: "Records" }), _jsx("br", {}), isAdmin && _jsx(Link, { to: "/users", children: "Users" })] })] }), _jsxs("div", { style: { flex: 1 }, children: [_jsxs("div", { style: { background: "white", padding: 10 }, children: ["Role: ", role] }), _jsx("div", { style: { padding: 20 }, children: children })] })] }));
};
export default Layout;
