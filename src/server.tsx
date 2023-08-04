import express, { Request, Response } from "express";
import { StaticRouter } from "react-router-dom/server";
import { renderToString } from "react-dom/server";
import Router from "./routes";

import path from "path";

const app = express();

const port = process.env.PORT || 3000;

const publicDir = path.resolve(__dirname, "../client");

app.use("/static", express.static(publicDir));

const render = async (req: Request, res: Response) => {
  const html = renderToString(
    <StaticRouter location={req.url}>
      <Router />
    </StaticRouter>
  );

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SSR - Webpack example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `);
};

app.get("*", render);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
