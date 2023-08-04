import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static("dist"));

const render = (req: Request, res: Response) => {
  const content = "<div>Response Content</div>";
  res.send(content);
};

app.get("*", render);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
