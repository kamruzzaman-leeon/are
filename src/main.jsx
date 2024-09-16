import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Routers from "./Routers/Routers";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>

        <RouterProvider router={Routers} />

      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>

);