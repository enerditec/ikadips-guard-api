import { app } from './app';
import logger from '@/utils/logger/winston';

const INTERNAL_PORT = 8000;
const EXTERNAL_PORT = Bun.env.PORT;

app.listen(INTERNAL_PORT, () => {
  if (Bun.env.ENVIRONMENT === 'production') {
    logger.info(`Elysia is running at guard-api:${INTERNAL_PORT}`);
    return;
  }

  logger.info(`Elysia is running at ${app.server?.hostname}:${EXTERNAL_PORT}`);
});
