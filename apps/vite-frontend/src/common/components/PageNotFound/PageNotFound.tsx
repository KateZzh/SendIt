import { Path } from "@/common/routing";
import { Button, Result } from "antd";

export const PageNotFound = () => (
    <Result
        status='404'
        title='404'
        subTitle='Страница не найдена'
        extra={
            <Button type='primary' variant='link' href={Path.Main}>
                На главную страницу
            </Button>
        }
        style={{ width: "100%" }}
    />
);
