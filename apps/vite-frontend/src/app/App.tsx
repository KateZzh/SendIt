import { Routing } from "@/common/routing";
import { Card } from "antd";

export const App = () => {
    return (
        <Card style={{ maxWidth: "37.5rem",  marginInline: "1rem"}}>
            <Routing />
        </Card>
    );
};
