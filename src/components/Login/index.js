import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

import { AuthContext } from "../context/AuthContext";

function Login() {
  const history = useHistory();
  const { authentication } = useContext(AuthContext);
  const [usuario, setUsuario] = useState({});

  function handleChange(e) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    authentication(usuario);
    setTimeout(() => {
      history.push("/");
    }, 1000);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="row">
          <span>Username</span>
          <input type="text" name="username" onChange={handleChange} />
        </div>
        <div className="row">
          <span>Password</span>
          <input type="password" name="password" onChange={handleChange} />
        </div>

        <div className="row">
          <button>Logar-se</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
