declare module 'bun' {
  interface Env {
    PORT: number;
    ENVIRONMENT: 'development' | 'production';
  }
}
