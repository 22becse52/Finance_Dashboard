import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import api from "../services/api";
const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        api.get("/users").then((res) => setUsers(res.data));
    }, []);
    return (_jsxs(Layout, { children: [_jsx("h2", { children: "Users" }), _jsxs("table", { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Name" }), _jsx("th", { children: "Role" })] }) }), _jsx("tbody", { children: users.map((u) => (_jsxs("tr", { children: [_jsx("td", { children: u.name }), _jsx("td", { children: u.role })] }, u.id))) })] })] }));
};
export default Users;
