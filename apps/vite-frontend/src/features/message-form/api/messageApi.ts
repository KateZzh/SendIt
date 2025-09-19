import { instance } from "@/common/instance";
import type { MessageData } from "./messageApi.types";

export const messageApi = {
    sendMessage(payload: MessageData) {
        return instance.post<void>("/messages", payload);
    },
};
