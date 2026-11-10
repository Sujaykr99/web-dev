import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PoetPage from "./pages/PoetPage";
import CategoryPage from "./pages/CategoryPage";
import CreateCard from "./pages/CreateCard";
import PoetryDetail from "./components/PoetryDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poet/:id" element={<PoetPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/poetry/:id" element={<PoetryDetail />} />
        <Route path="/create/:id" element={<CreateCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
