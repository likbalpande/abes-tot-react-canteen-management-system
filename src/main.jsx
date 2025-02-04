// import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const domElement = document.getElementById("root");

const root = ReactDOM.createRoot(domElement);

root.render(
    // <StrictMode>
    <App />
    // </StrictMode>
);
