import Elysia from 'elysia';
import { usersRoute } from '@/routes/users';

export const app = new Elysia();

app.group('/api/v1', (app) => app.use(usersRoute));
