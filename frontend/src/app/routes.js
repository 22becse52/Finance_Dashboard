import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Records from "./pages/Records";
import Users from "./pages/Users";
import Login from "./pages/Login";
const AppRoutes = () => {
    const role = localStorage.getItem("role");
    if (!role) {
        return _jsx(Login, {});
    }
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Dashboard, {}) }), (role === "admin" || role === "analyst") && (_jsx(Route, { path: "/records", element: _jsx(Records, {}) })), role === "admin" && _jsx(Route, { path: "/users", element: _jsx(Users, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/" }) })] }));
};
export default AppRoutes;
