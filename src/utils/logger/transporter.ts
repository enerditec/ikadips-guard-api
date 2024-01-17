import { transports } from 'winston';
import { logFormat } from './format';

import DailyRotateFile from 'winston-daily-rotate-file';

export const errorFileTransport = new transports.File({
  filename: 'logs/server-error.log',
  level: 'error',
  format: logFormat('file'),
});

export const consoleTransport = new transports.Console({
  format: logFormat('console'),
  handleExceptions: true,
});

export const dalyFileTransport = new DailyRotateFile({
  filename: 'logs/archives/server-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxFiles: '14d',
  format: logFormat('file'),
});
