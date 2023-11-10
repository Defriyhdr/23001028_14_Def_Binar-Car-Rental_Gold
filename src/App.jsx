import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import User from "./pages/User";
import UserDetail from "./pages/UserDetail";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/car" element={<CarSearch />} />
        <Route path="/car/:id" element={<CarDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
