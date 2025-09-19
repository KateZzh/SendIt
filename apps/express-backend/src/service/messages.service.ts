import { Messages } from "@prisma/client";
import { ExceptionType } from "../exception";
import { createMessageDB } from "../repository/messages.repository";

export async function createMessage(data: Omit<Messages, "id">) {
    const createdMessage = await createMessageDB(data);
    if (!createdMessage) throw new Error(ExceptionType.DB_MESSAGE_CREATE_ERROR);

    return createdMessage;
}
