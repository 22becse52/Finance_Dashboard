import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import api from "../services/api";

const Dashboard = () => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    api.get("/dashboard/summary").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Layout>
      <h2>Dashboard</h2>

      <div style={{ display: "flex", gap: 20 }}>
        <Card title="Income" value={data.total_income} />
        <Card title="Expense" value={data.total_expense} />
        <Card title="Balance" value={data.net_balance} />
      </div>
    </Layout>
  );
};

const Card = ({ title, value }: any) => (
  <div style={{ background: "white", padding: 20 }}>
    <h4>{title}</h4>
    <h2>₹ {value || 0}</h2>
  </div>
);

export default Dashboard;