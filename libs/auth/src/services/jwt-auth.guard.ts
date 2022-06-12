import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import { Request, Response } from 'express';

@Injectable()
export class JwtAuthGuard implements NestMiddleware {
  private defaultApp: any;

  constructor() {
    this.defaultApp = firebase;
  }

  use(req: Request, res: Response, next: any) {
    const token = req.headers.authorization;
    if (token != null && token != '') {
      this.defaultApp
        .auth()
        .verifyIdToken(token.replace('Bearer ', ''))
        .then(async (decodedToken) => {
          const user = {
            email: decodedToken.email,
          };
          req['user'] = user;
          next();
        })
        .catch((error) => {
          console.error(error);
          this.accessDenied(req.url, res);
        });
    } else {
      next();
    }
  }

  private accessDenied(url: string, res: Response) {
    res.status(403).json({
      statusCode: 403,
      timestamp: new Date().toISOString(),
      path: url,
      message: 'Access Denied',
    });
  }
}
