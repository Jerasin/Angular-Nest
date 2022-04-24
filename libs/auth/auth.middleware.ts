import { Injectable , NestMiddleware } from '@nestjs/common';
import * as firebase from 'firebase-admin'

@Injectable()
export class AuthMiddleware implements NestMiddleware{

    private defaultApp:any

    // constructor() {
    //      this.defaultApp =
        
    // }

}