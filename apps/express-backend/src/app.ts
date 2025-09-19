import cors from "cors";
import type { NextFunction, Request, Response } from "express";
import express from "express";
import { router as messages } from "./controller/messages.controller";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", messages);

app.use((error: any, _req: Request, res: Response, _next: NextFunction) => res.send(error.message));
