module.exports = {
    PORT: process.env.PORT || 5000,
    DB_PASSWORD: process.env.DB_PASSWORD || '1234567',
    MONGO_URL: process.env.MONGO_URL || 'mongodb://127.0.0.1/test-project',

    ACCESS_SECRET: process.env.ACCESS_SECRET || 'secretWord',
    REFRESH_SECRET: process.env.REFRESH_SECRET || 'secretRefreshWord',

    NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL,
    NO_REPLY_EMAIL_PASSWORD: process.env.NO_REPLY_EMAIL_PASSWORD,
};
