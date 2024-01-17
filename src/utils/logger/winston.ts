import { createLogger, format, type LoggerOptions, transports } from 'winston';
import {
  consoleTransport,
  dalyFileTransport,
  errorFileTransport,
} from './transporter';

const { combine, timestamp, printf, errors } = format;

const options: LoggerOptions = {
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.json(),
    printf(({ level, message, timestamp }) => {
      const text = `${timestamp} [${level}]: ${message}`;
      return text;
    }),
    errors({ stack: true }),
  ),
  defaultMeta: {
    package: 'server',
  },
  transports: [consoleTransport, errorFileTransport, dalyFileTransport],
  exceptionHandlers: [new transports.File({ filename: 'logs/exceptions.log' })],
  rejectionHandlers: [new transports.File({ filename: 'logs/rejections.log' })],
};

const logger = createLogger(options);

export default logger;
