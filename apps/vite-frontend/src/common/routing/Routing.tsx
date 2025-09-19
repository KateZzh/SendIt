import { Main } from "@/app/Main";
import { MessageForm } from "@/features/message-form/ui";
import { Route, Routes } from "react-router";
import { PageNotFound } from "../components";

export const Path = {
    Main: "/",
    Form: "form",
    NotFound: "*",
} as const;

export const Routing = () => (
    <Routes>
        <Route path={Path.Main} element={<Main />} />
        <Route path={Path.Form} element={<MessageForm />} />
        <Route path={Path.NotFound} element={<PageNotFound />} />
    </Routes>
);
