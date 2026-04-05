import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import api from "../services/api";
const Dashboard = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        api.get("/dashboard/summary").then((res) => {
            setData(res.data);
        });
    }, []);
    return (_jsxs(Layout, { children: [_jsx("h2", { children: "Dashboard" }), _jsxs("div", { style: { display: "flex", gap: 20 }, children: [_jsx(Card, { title: "Income", value: data.total_income }), _jsx(Card, { title: "Expense", value: data.total_expense }), _jsx(Card, { title: "Balance", value: data.net_balance })] })] }));
};
const Card = ({ title, value }) => (_jsxs("div", { style: { background: "white", padding: 20 }, children: [_jsx("h4", { children: title }), _jsxs("h2", { children: ["\u20B9 ", value || 0] })] }));
export default Dashboard;
