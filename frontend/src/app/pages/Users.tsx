import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import api from "../services/api";

const Users = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    api.get("/users").then((res) => setUsers(res.data));
  }, []);

  return (
    <Layout>
      <h2>Users</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Users;