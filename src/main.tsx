import { createRoot } from "react-dom/client";
import "./index.css";
import "@radix-ui/themes/styles.css";
import App from "./app/App.tsx";
import './app/i18n.ts'

createRoot(document.getElementById("root")!).render(<App />);
