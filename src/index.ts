import { Elysia } from 'elysia';
import { usersRoute } from './routes/users';

const PORT = 8000;
const app = new Elysia();

app
  .group('/api/v1', (app) => app.use(usersRoute))
  .listen(PORT, () => {
    console.log(`🦊 Elysia is running at ${app.server?.hostname}:${PORT}`);
  });
