import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CarSearch from "./pages/CarSearch";
import CarDetail from "./pages/CarDetail";
import NotFound from "./pages/NotFound";
import TestPage from "./pages/TestPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/car" element={<CarSearch />} />
        <Route path="/car/:id" element={<CarDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/test/" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
