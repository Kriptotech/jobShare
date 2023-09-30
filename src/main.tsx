import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import "./index.css";
import Homepage from "./pages/homepage/index.tsx";
import AboutPage from "./pages/about/index.tsx";
import NotFound from "./pages/404/index.tsx";
import ContactPage from "./pages/contact/index.tsx";
import SercicesPage from "./pages/services/index.tsx";

const router = createBrowserRouter([
    {
        path: "*",
        element: <NotFound />,
    },
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
    {
        path: "/contact",
        element: <ContactPage />,
    },
    {
        path: "/services",
        element: <SercicesPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as any).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
