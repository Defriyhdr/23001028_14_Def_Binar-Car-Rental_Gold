
import { ChakraProvider } from "@chakra-ui/react";
import CarDetail from "./pages/CarDetail";
import CarSearch from "./pages/CarSearch";
import Eticket from "./pages/Eticket";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Payment from "./pages/Payment";
import Payment3 from "./pages/Payment3";
import Register from "./pages/Register";
import React from 'react'
import Protected from "./Routes/Protected";

import IsAuthentication from "./Routes/Authentication";
export const routes = 

[
    
    {
        path : "/",
        element : <LandingPage />
    },
    {
        path : "/car",
        element : <CarSearch/>
    },
    {
        path : "/car/:id",
        element : <CarDetail/>
    },
    {
        path : "/payment/:orderId",
        element :<ChakraProvider><Protected><Payment /></Protected></ChakraProvider>
    },
    {
        path:"/payment-confirm/:orderId",
        element :<ChakraProvider><Payment3 /></ChakraProvider>
    },
    {
        path : "/eticket/:orderId",
        element :<ChakraProvider> <Eticket/></ChakraProvider>
    },
    {
        path : "/login",
        element : <IsAuthentication><Login/></IsAuthentication>
    },
    {
        path : "/register",
        element : <IsAuthentication><Register /></IsAuthentication>
    },
    {
        path : "*",
        element : <NotFound />
    }
]