import React from "react";

import { Route, Routes } from "react-router-dom";

import "./App.css";
import UserPage from "./pages/UserPage";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/:id" element={<UserPage />} />
    </Routes>
  );
}

export default App;
