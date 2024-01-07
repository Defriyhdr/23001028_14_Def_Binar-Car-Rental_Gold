import React from "react";
import { BrowserRouter, Routes, Route,useRoutes} from "react-router-dom";
import {routes} from "./Routes"

const App = () => {
    let element = useRoutes(routes)
    return element

};

export default App;
