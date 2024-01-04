import type { Elysia } from "elysia";

export const usersRoute = (app: Elysia) => 
  app
    .group('/users', (app) => 
      app
        .get('/', () => '🚀 Hello World')
        .get('/:id', ({ params }) => `🚀 Hello ${params.id}`)
    )
;
