import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import LearnMore from "./components/LearnMore.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <ScrollToTop />
        <LearnMore />
      </>
    ),
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
