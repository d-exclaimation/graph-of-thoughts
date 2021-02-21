//
//  authentication.guard.ts
//  server
//
//  Created by d-exclaimation on 1:50 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const host = context.switchToHttp();
        const request = host.getRequest<Request>();
        const auth = request.headers.authorization;
        return !!(auth && auth === process.env.AUTH);
    }
}

