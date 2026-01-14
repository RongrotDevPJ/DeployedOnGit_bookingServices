export default () => ({
    env: process.env.ENV,
    port: parseInt(process.env.PORT as string, 10) || 3000,

    logLevel: process.env.LOG_LEVEL,
    apiKey: process.env.API_KEY,
});
