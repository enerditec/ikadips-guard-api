import { app } from './app';

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`🦊 Elysia is running at ${app.server?.hostname}:${PORT}`);
});
