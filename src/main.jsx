import { DataProvider } from "./context/data-context.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Add from "./components/Molecules/add-contact-lead.jsx";

createRoot(document.getElementById("root")).render(
  <DataProvider>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
        <Add />
      </BrowserRouter>
    </StrictMode>
  </DataProvider>
);
