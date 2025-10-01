import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TanstackQueryProvider } from "@/providers/tanstackQuery.provider.tsx";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes/routes";
import "@/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanstackQueryProvider>
      <BrowserRouter>
        {/* render routes */}
        <AppRoutes />
        
      </BrowserRouter>
    </TanstackQueryProvider>
  </StrictMode>
);
