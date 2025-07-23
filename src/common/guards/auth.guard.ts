import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {Observable} from "rxjs";
import {Request} from "express";

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(
        context: ExecutionContext
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest() as Request;
        const token = request.headers['authorization'];

        // Check if the token is present and valid
        if (!token || !token.startsWith('Bearer ')) {
            throw new UnauthorizedException();
        }

        return true;
    }
}
