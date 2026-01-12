export default () => ({
    env: process.env.ENV,
    port: parseInt(process.env.PORT as string, 10) || 3000,
    datetimeFormatPattern: process.env.DATETIME_FORMAT_PATTERN,
    timezone: process.env.TIMEZONE,
    retryAttempts: parseInt(process.env.RETRY_ATTEMPTS as string, 10) || 3,
    timeout: parseInt(process.env.TIMEOUT as string, 10) || 10000,
    logLevel: process.env.LOG_LEVEL,
});
