import { Path } from "@/common/routing";
import { Button, Flex, Typography } from "antd";

export const Main = () => {
    return (
        <main>
            <Flex vertical justify='center' align='center' gap={16}>
                <Typography.Title level={2}>Добро пожаловать в SendIt!</Typography.Title>

                <Typography.Paragraph>
                    Мы рады вас видеть! Это приложение предназначено для легкой отправки и хранения
                    сообщений.
                    <br />
                    Нажмите кнопку "Далее", чтобы перейти к странице отправки сообщений.
                </Typography.Paragraph>

                <Button type='primary' variant='link' href={Path.Form}>
                    Далее
                </Button>
            </Flex>
        </main>
    );
};
