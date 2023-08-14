import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ContextApi from "./contextApi/ContextApi.jsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ContextApi>
      <App />
    </ContextApi>
  </BrowserRouter>
);
