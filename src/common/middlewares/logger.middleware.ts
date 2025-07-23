import {Injectable, NestMiddleware} from "@nestjs/common";
import {NextFunction, Request, Response} from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const {method, originalUrl} = req;
        const startTime = Date.now();

        res.on('finish', () => {
            const duration = Date.now() - startTime;
            console.log(`${method} ${originalUrl} - ${res.statusCode} - ${duration}ms`);
        });

        next();
    }
}
