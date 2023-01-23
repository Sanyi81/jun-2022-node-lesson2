module.exports = {
    PORT: process.env.PORT || 5000,
    DB_PASSWORD: process.env.DB_PASSWORD || '1234567',
    MONGO_URL: process.env.MONGO_URL || 'mongodb://127.0.0.1/test-project',
    FRONTEND_URL: process.env.FRONTEND_URL || 'https://0.0.0.0:3000',

    ACCESS_SECRET: process.env.ACCESS_SECRET || 'secretWord',
    REFRESH_SECRET: process.env.REFRESH_SECRET || 'secretRefreshWord',

    NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL,
    NO_REPLY_EMAIL_PASSWORD: process.env.NO_REPLY_EMAIL_PASSWORD,

    CONFIRM_ACCOUNT_ACTION_TOKEN_SECRET: process.env.CONFIRM_ACCOUNT_ACTION_TOKEN_SECRET || 'CAATS',
    FORGOT_PASSWORD_ACTION_TOKEN_SECRET: process.env.FORGOT_PASSWORD_ACTION_TOKEN_SECRET || 'FPATS',

    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
    TWILIO_SERVICE_SID: process.env.TWILIO_SERVICE_SID,
    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,

    S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
    S3_BUCKET_REGION: process.env.S3_BUCKET_REGION,
    S3_BUCKET_URL: process.env.S3_BUCKET_URL,
    S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
    S3_SECRET_KEY: process.env.S3_SECRET_KEY,

};
