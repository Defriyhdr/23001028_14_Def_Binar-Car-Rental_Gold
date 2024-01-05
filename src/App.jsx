import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CarSearch from "./pages/CarSearch";
import CarDetail from "./pages/CarDetail";
import NotFound from "./pages/NotFound";
import Payment from "./pages/Payment";
import Payment3 from "./pages/Payment3";
import { ChakraProvider } from '@chakra-ui/react'
import Eticket from "./pages/Eticket";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/car" element={<CarSearch />} />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path="/payment/:orderId" element={<Payment />} />
          <Route path="/payment-confirm/:orderId" element={<Payment3 />} />
          <Route path="/eticket/:orderId" element={<Eticket/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
