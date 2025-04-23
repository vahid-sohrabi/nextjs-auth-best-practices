import winston from 'winston';

const logFormat = winston.format.printf(({ timestamp, level, message, stack }) => {
    return `${level.toUpperCase()} ${timestamp}: ${message} ${stack || ''}`;
});

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        logFormat
    ),
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                logFormat
            )
        }),
        new winston.transports.File({
            filename: 'combined.log',
            format: logFormat
        })
    ],
});

export { logger };
