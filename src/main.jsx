import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./routes/AllRoutes.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <BrowserRouter>
        <Header />
        <AllRoutes />
        <Footer />
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
);
