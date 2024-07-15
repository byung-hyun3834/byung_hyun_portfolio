import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Pages from "pages";

export default function CustomRoute() {
  let location = useLocation();
  const [iconRun, setIconRun] = useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Pages.MainPage iconRun={iconRun} setIconRun={setIconRun} />}
      />
      <Route path="/Portfolio/*" element={<Pages.PortfolioPage />}></Route>
    </Routes>
  );
}
