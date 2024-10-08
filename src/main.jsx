import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

// import Components
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import MainLayout from "./pages/MainLayout.jsx";
import CookiePolicy from "./pages/CookiePolicy.jsx";
import TermoConsentimento from "./pages/TermoConsentimento.jsx";
import MyCart from "./pages/MyCart.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<App />} />
                <Route path="meu-carrinho" element={<MyCart />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="politica-de-cookies" element={<CookiePolicy />} />
                <Route path="termos" element={<TermoConsentimento />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
