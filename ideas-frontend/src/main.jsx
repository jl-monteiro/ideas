import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home/index.jsx";
import "./index.css";
import Header from "./components/layout/Header/index.jsx";
import Sidebar from "./components/layout/Sidebar/index.jsx";
import Footer from "./components/layout/Footer/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Sidebar />
    <Home />
    <Footer />
  </StrictMode>
);
