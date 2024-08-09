import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Sewa from "./pages/Sewa";
import SewaDetail from "./pages/SewaDetail";
import PrivateRoute from "./core/PrivateRoute";
import Login from "./pages/Login";
import { useState } from "react";
import Register from "./pages/Register";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  let navigate = useNavigate();
  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isAuthenticated]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/sewa"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Sewa onLogout={logout} />
            </PrivateRoute>
          }
          onLogout={logout}
        />
        <Route
          path="/sewa/:carId"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <SewaDetail onLogout={logout} />
            </PrivateRoute>
          }
          onLogout={logout}
        />
      </Routes>
    </>
  );
}

export default App;
