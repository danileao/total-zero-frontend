import React, { useContext } from "react";

import "./styles.css";

import { AuthContext } from "../context/AuthContext";

function Header() {
  const { auth } = useContext(AuthContext);

  return (
    <header>
      <nav>
        <a href="/login">Login</a>
        <a href="/">Home</a>
        <a href="/register">Cadastre-se</a>
      </nav>

      {auth.user && <strong>Seja bem vindo(a)! {auth.user?.name}</strong>}
    </header>
  );
}

export default Header;
