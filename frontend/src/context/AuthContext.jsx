import { createContext, useContext, useEffect, useState } from "react";
import api from "../api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("cloudtask_token"));
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("cloudtask_user");
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(Boolean(token));

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    api.get("/auth/me")
      .then((response) => {
        setUser(response.data);
        localStorage.setItem("cloudtask_user", JSON.stringify(response.data));
      })
      .catch(() => {
        localStorage.removeItem("cloudtask_token");
        localStorage.removeItem("cloudtask_user");
        setToken(null);
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, [token]);

  async function login(email, password) {
    const response = await api.post("/auth/login", { email, password });
    localStorage.setItem("cloudtask_token", response.data.token);
    localStorage.setItem("cloudtask_user", JSON.stringify(response.data.user));
    setToken(response.data.token);
    setUser(response.data.user);
  }

  async function register(name, email, password) {
    const response = await api.post("/auth/register", { name, email, password });
    localStorage.setItem("cloudtask_token", response.data.token);
    localStorage.setItem("cloudtask_user", JSON.stringify(response.data.user));
    setToken(response.data.token);
    setUser(response.data.user);
  }

  function logout() {
    localStorage.removeItem("cloudtask_token");
    localStorage.removeItem("cloudtask_user");
    setToken(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ token, user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
