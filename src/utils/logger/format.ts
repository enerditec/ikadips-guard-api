import { format } from 'winston';
const { combine, timestamp, printf, errors, colorize } = format;

type EntryType = 'console' | 'file';

export const logFormat = (entry: EntryType) =>
  combine(
    format.json(),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    printf(({ level, message, timestamp }) => {
      let coloredLevel = level.toUpperCase();
      if (entry === 'console') {
        coloredLevel = colorize().colorize(level, coloredLevel);
      }
      return `${timestamp} [${coloredLevel}]: ${message}`;
    }),
    errors({ stack: true }),
  );
