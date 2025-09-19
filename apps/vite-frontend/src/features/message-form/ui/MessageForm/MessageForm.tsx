import { FormValidation, MessagesNotifications } from "@/common/constants";
import { Button, Form, Input, Select, message } from "antd";
import { messageApi } from "../../api/messageApi";
import type { MessageFormData } from "@/common/types";
import { useState } from "react";

export const MessageForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const [form] = Form.useForm<MessageFormData>();

    const prefixSelector = (
        <Form.Item name='prefix' noStyle>
            <Select style={{ width: 80 }}>
                {FormValidation.PHONE_PREFIX_OPTIONS.map((prefix, i) => (
                    <Select.Option key={`phone-prefix-${i}`} value={prefix}>
                        {prefix}
                    </Select.Option>
                ))}
            </Select>
        </Form.Item>
    );

    const onFinish = async (values: MessageFormData) => {
        try {
            setIsLoading(true);
            const payload = {
                name: values.name.trim(),
                phone: `${values.prefix}${values.phone}`,
                message: values.message,
            };

            await messageApi.sendMessage(payload);

            message.success(MessagesNotifications.SUCCESS);
            form.resetFields();
            setHasSubmitted(false);
        } catch (e) {
            console.error(e);
            message.error(MessagesNotifications.ERROR);
        } finally {
            setIsLoading(false);
        }
    };

    const onFinishFailed = () => {
        setHasSubmitted(true);
    };

    return (
        <Form
            layout='vertical'
            name='form-messages'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={{ prefix: FormValidation.PHONE_PREFIX_OPTIONS[0] }}
            form={form}
        >
            <Form.Item
                name='name'
                label='Имя'
                validateTrigger={hasSubmitted ? "onChange" : "onSubmit"}
                rules={[
                    {
                        required: true,
                        min: FormValidation.MIN_LENGTH_VALIDATION,
                        message: FormValidation.MESSAGES.NAME_MIN_LENGTH,
                    },
                ]}
            >
                <Input placeholder={FormValidation.PLACEHOLDERS.NAME} />
            </Form.Item>
            <Form.Item
                name='phone'
                label='Телефон'
                validateTrigger={hasSubmitted ? "onChange" : "onSubmit"}
                rules={[
                    {
                        required: true,
                        pattern: FormValidation.PHONE_PATTERN,
                        message: FormValidation.MESSAGES.PHONE_PATTERN,
                    },
                ]}
            >
                <Input
                    addonBefore={prefixSelector}
                    style={{ width: "100%" }}
                    placeholder={FormValidation.PLACEHOLDERS.PHONE}
                />
            </Form.Item>
            <Form.Item
                name='message'
                label='Сообщение'
                validateTrigger={hasSubmitted ? "onChange" : "onSubmit"}
                rules={[
                    {
                        required: true,
                        min: FormValidation.MIN_LENGTH_VALIDATION,
                        message: FormValidation.MESSAGES.MESSAGE_MIN_LENGTH,
                    },
                ]}
            >
                <Input.TextArea placeholder={FormValidation.PLACEHOLDERS.MESSAGE} />
            </Form.Item>

            <Form.Item label={null}>
                <Button type='primary' htmlType='submit' disabled={isLoading}>
                    Отправить
                </Button>
            </Form.Item>
        </Form>
    );
};
