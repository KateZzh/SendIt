import express from "express";
import type { Request, Response } from "express";
import { createMessage } from "../service/messages.service";
import { isValidMessageBody } from "../helper/validation";
import { buildResponse } from "../helper/buildResponse";

export const router = express.Router();

router.post("/messages", isValidMessageBody, async (req: Request, res: Response) => {
    try {
        await createMessage(req.body);

        buildResponse(res, 201);
    } catch (error: any) {
        buildResponse(res, 400, error.message);
    }
});
