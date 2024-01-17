import Elysia from 'elysia';
import { jwt } from '@elysiajs/jwt';
import { swagger } from '@elysiajs/swagger';
import { authRoute } from './routes/users/authRoute';

export const app = new Elysia();

app
  .use(swagger())
  .use(
    jwt({
      name: 'jwt',
      secret: Bun.env.JWT_SECRET,
    }),
  )
  .use(authRoute);
