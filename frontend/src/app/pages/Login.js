import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [role, setRole] = useState("viewer");
    const navigate = useNavigate();
    const handleLogin = () => {
        localStorage.setItem("role", role);
        navigate("/");
    };
    return (_jsx("div", { className: "flex h-screen items-center justify-center bg-gray-100", children: _jsxs("div", { className: "bg-white p-8 rounded shadow w-80", children: [_jsx("h2", { className: "text-xl font-bold mb-4", children: "Login" }), _jsxs("select", { className: "w-full p-2 border mb-4", value: role, onChange: (e) => setRole(e.target.value), children: [_jsx("option", { value: "admin", children: "Admin" }), _jsx("option", { value: "analyst", children: "Analyst" }), _jsx("option", { value: "viewer", children: "Viewer" })] }), _jsx("button", { onClick: handleLogin, className: "w-full bg-blue-600 text-white p-2 rounded", children: "Login" })] }) }));
};
export default Login;
