import React, { useEffect, useState } from "react";

import api from "../../services/api";

import "./styles.css";

export default function Home() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("@token:totalZero");
    console.log(token);
    if (token) {
      api
        .get("/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => setUsuarios(response.data));
    }
  }, []);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Nome</th>
            <th>Usuário</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => {
            return (
              <tr key={usuario._id}>
                <td>{usuario.email}</td>
                <td>{usuario.name}</td>
                <td>{usuario.username}</td>
                <td>{usuario.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
