import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import api from "../services/api";
import { useAuth } from "../hooks/useAuth";
const Records = () => {
    const [records, setRecords] = useState([]);
    const { isAdmin } = useAuth();
    const fetchData = () => {
        api.get("/records").then((res) => setRecords(res.data));
    };
    useEffect(() => {
        fetchData();
    }, []);
    const addRecord = async () => {
        const amount = prompt("Amount");
        const type = prompt("Type");
        const category = prompt("Category");
        await api.post("/records", { amount, type, category });
        fetchData();
    };
    return (_jsxs(Layout, { children: [_jsx("h2", { children: "Records" }), isAdmin && _jsx("button", { onClick: addRecord, children: "Add Record" }), _jsxs("table", { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Amount" }), _jsx("th", { children: "Type" }), _jsx("th", { children: "Category" })] }) }), _jsx("tbody", { children: records.map((r) => (_jsxs("tr", { children: [_jsx("td", { children: r.amount }), _jsx("td", { children: r.type }), _jsx("td", { children: r.category })] }, r.id))) })] })] }));
};
export default Records;
