import React, { createContext, useCallback, useState } from "react";

import api from "../../services/api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const authentication = useCallback(({ username, password }) => {
    api.post("/session", { username, password }).then((response) => {
      setAuth(response.data);
      localStorage.setItem("@token:totalZero", response.data.token);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ authentication, auth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
