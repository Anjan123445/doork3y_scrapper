import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./page/LandingPage";
import RegistrationPage from "./page/RegistrationPage";
import LoginPage from "./page/LoginPage";
import ProfilePage from "./page/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
