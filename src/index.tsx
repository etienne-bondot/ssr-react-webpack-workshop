import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import routes from "./routes";

const container = document.getElementById("root");

const root = createRoot(container!);

const router = createBrowserRouter(routes);

root.render(<RouterProvider router={router} />);
