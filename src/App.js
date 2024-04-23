import React, { useEffect } from "react";
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CustomRoute } from "routes";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<CustomRoute></CustomRoute>} />
        </Routes>
      </BrowserRouter>
  );
}


