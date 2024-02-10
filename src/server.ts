import express, { Request, Response } from "express";
import "dotenv/config";
const app = express();

app.get("/", (_: Request, res: Response) => {
	return res.status(200).json("Hello World");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("listening on port "+port);
});