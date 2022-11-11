import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
import {Request, Response} from "express";


const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to typescript");
});


export const api = functions.https.onRequest(app);
