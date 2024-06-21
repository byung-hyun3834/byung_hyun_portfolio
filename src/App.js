import React, { useEffect } from "react";
import './App.css';
import { Route, Routes, HashRouter } from "react-router-dom";
import { CustomRoute } from "routes";

export default function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="*" element={<CustomRoute></CustomRoute>} />
        </Routes>
      </HashRouter>
  );
}


