import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Router } from "wouter";

const basename = "/Natal-Criativo"; // 👈 igual ao nome do repositório e do link do Pages

createRoot(document.getElementById("root")!).render(
  <Router base={basename}>
    <App />
  </Router>
);

