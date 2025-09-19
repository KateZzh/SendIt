import { Messages } from "@prisma/client";
import { prisma } from "../config/prisma";

export async function createMessageDB(data: Omit<Messages, "id">) {
    const message = await prisma.messages.create({
        data,
    });

    return message;
}
