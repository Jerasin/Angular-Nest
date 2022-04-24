import { Controller,Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import {Message} from '@web/api-interfaces'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  
  }

  @Get('hello')
  getData(): Message {
    return this.usersService.getData();
  }
}
