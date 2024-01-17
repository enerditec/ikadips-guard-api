declare module 'bun' {
  interface Env {
    PORT: number;
    ENVIRONMENT: 'development' | 'production';
    JWT_SECRET: string;
  }
}
