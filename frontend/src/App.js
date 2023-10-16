import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Summary from "./pages/Summary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/summary" element={<Summary/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
