declare interface AppConfigOptions {
    name: string
    mode: string
    host: string
    port: number
}

export const appConfig: AppConfigOptions = {
    name: process.env.APP_NAME ?? 'gateway',
    mode: process.env.APP_MODE ?? 'development',
    host: process.env.APP_HOST ?? '127.0.0.1',
    port: process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 2222
}
