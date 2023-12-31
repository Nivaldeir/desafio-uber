declare module NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    ACESS_KEY_ID: string,
    SECRET_KEY: string,
    REGION_AWS: string,
  }
}
