import type Elysia from 'elysia';

export const authRoute = (app: Elysia) =>
  app.get('/me', ({ set }) => {
    set.status = 401;
    return {
      message: `You are currently not logged in`,
    };
  });
