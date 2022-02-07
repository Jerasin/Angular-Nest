import { Injectable } from '@nestjs/common';
import {Message} from '@web/api-interfaces'
@Injectable()
export class UsersService {
    getData(): Message {
        return { message: 'Welcome to api!' };
      }
}
