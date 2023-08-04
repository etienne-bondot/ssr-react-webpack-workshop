import { ReactElement } from "react";
import App from "./App";
import { Route, Routes } from "react-router-dom";

const Router = (): ReactElement => {
  return (
    <Routes>
      <Route element={<App />} path="/" />
    </Routes>
  );
};

export default Router;
