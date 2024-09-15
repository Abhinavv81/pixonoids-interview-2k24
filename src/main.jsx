import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./Context/useAuthContext.jsx";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
      <Analytics />
    </AuthProvider>
    <Toaster position="top-center" reverseOrder={false} />
  </StrictMode>
);
