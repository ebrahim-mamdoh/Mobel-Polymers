// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

/* Bootstrap CSS + JS (JS مطلوب للـ collapse/dropdown) */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/* Font Awesome (icons) */
import "@fortawesome/fontawesome-free/css/all.min.css";

/* global styles */
import "./index.css";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
