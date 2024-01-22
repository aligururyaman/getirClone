import './App.css'
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Getir from './pages/Getir'
import Yemek from './pages/Yemek'
import Buyuk from './pages/Buyuk';
import Kategoriler from './pages/Kategori/Kategoriler';


function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Getir />}/> 
          <Route path="/yemek" element={<Yemek/>}/> 
          <Route path="/büyük" element={<Buyuk/>}/> 
          <Route path="/kategori" element={<Kategoriler/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
