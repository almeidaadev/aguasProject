import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

// import Components
import Login from "./components/Login";
import Register from "./components/Register";
import MainLayout from "./components/MainLayout";
import CookiePolicy from "./components/CookiePolicy.jsx";
import TermoConsentimento from "./components/TermoConsentimento.jsx";
import MyCart from "./components/MyCart.jsx";

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
