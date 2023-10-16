import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Summary from "./pages/Summary";
import Books from "./pages/Books";
import Contacts from "./pages/Contacts";
import Orders from "./pages/Orders";
import NewOrder from "./pages/NewOrder";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index={true} path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/summary" element={<Summary/>} />
        <Route path="/books" element={<Books/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/neworder" element={<NewOrder/>} />
        <Route path="/login" element={<Login/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
