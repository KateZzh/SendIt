export const FormValidation = {
    MESSAGES: {
        NAME_MIN_LENGTH: "Имя должно содержать не менее 2 символов.",
        PHONE_PATTERN: "Некорректный формат телефона. Например: 291234567.",
        MESSAGE_MIN_LENGTH: "Сообщение должно содержать не менее 2 символов.",
    },
    PLACEHOLDERS: {
        NAME: "Иван",
        PHONE: "291234567",
        MESSAGE: "Ваше сообщение",
    },
    PHONE_PREFIX_OPTIONS: ["+375", "80"],
    PHONE_PATTERN: /^\d{9}$/,
    MIN_LENGTH_VALIDATION: 2,
} as const;

export const MessagesNotifications = {
    SUCCESS: 'Сообщение успешно отправлено!',
    ERROR: 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.',
};