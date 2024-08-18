import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Routers from "./Routers/Routers";
import { HelmetProvider } from "react-helmet-async";



ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
 <React.StrictMode>
    <RouterProvider router={Routers} />
  </React.StrictMode>
  </HelmetProvider>
 
);