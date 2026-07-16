import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Auth from "./pages/auth";

function App() {
  // Fonction de connexion
  const handleLogin = () => {
    console.log('Connexion réussie');
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth onLogin={handleLogin} />} />
    </Routes>
  );
}

export default App;