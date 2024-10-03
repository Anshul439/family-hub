import express, {Express, Request, Response } from "express";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello Typescript");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

