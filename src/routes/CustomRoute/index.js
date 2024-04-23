import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Pages from "pages";

export default function CustomRoute() {
    let location = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTo(0, 0);
    }, [location]);

    return (
        <Routes>
            <Route path="/" element={<Pages.MainPage />} />
            <Route path="/Portfolio" element={<Pages.PortfolioPage />} />
        </Routes>
    );
}
