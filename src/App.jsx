import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CarSearch from "./pages/CarSearch";
import CarDetail from "./pages/CarDetail";
import NotFound from "./pages/NotFound";
import Payment from "./pages/Payment";
import Payment3 from "./pages/Payment3";
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/car" element={<CarSearch />} />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path="/car/:id/payment" element={<Payment />} />
          <Route path="/car/:id/payment3" element={<Payment3 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
