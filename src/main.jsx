// index.jsx ou App.jsx
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Login from "./components/Login";
import Register from "./components/Register";
import MainLayout from "./components/MainLayout"; // Verifique o caminho correto
import "./index.css";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<App />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
