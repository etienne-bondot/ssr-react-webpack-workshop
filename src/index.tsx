import { BrowserRouter, RouterProvider } from "react-router-dom";

import { hydrateRoot } from "react-dom/client";

import Router from "./routes";

const container = document.getElementById("root");

hydrateRoot(
  container!,
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
