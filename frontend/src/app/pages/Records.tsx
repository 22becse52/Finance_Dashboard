import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import api from "../services/api";
import { useAuth } from "../hooks/useAuth";

const Records = () => {
  const [records, setRecords] = useState<any[]>([]);
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

  return (
    <Layout>
      <h2>Records</h2>

      {isAdmin && <button onClick={addRecord}>Add Record</button>}

      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Type</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {records.map((r) => (
            <tr key={r.id}>
              <td>{r.amount}</td>
              <td>{r.type}</td>
              <td>{r.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Records;