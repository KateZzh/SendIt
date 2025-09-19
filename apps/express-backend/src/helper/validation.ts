import type { NextFunction, Request, Response } from "express";
import { MIN_LENGTH_VALIDATION, PHONE_REGEX } from "../constants";
import { ExceptionType } from '../exception';

export function isValidMessageBody(req: Request, res: Response, next: NextFunction) {
    const { name, phone, message } = req.body;

    if (!name) throw new Error(ExceptionType.NAME_FIELD_REQUIRED);
    if (name.length < MIN_LENGTH_VALIDATION) throw new Error(ExceptionType.NAME_FIELD_LENGTH);

    if (!phone) throw new Error(ExceptionType.PHONE_FIELD_REQUIRED);
    if (!PHONE_REGEX.test(phone)) throw new Error(ExceptionType.PHONE_FIELD_INVALID);

    if (!message) throw new Error(ExceptionType.MESSAGE_FIELD_REQUIRED);
    if (message.length < MIN_LENGTH_VALIDATION) throw new Error(ExceptionType.MESSAGE_FIELD_LENGTH);

    next();
}
