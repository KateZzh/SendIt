import type { Response } from "express";

export function buildResponse(res: Response, code: number, message?: string) {
    res.status(code).send(message);
}
