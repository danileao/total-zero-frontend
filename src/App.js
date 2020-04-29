import React from "react";

import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Routes from "./routes/routes";

import { AuthProvider } from "./components/context/AuthContext";

import "./global.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header /> <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
