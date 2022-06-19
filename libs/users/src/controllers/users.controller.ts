import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { Message } from '@web/api-interfaces';
import { JwtAuthGuard } from '@web/auth';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // @UseGuards(JwtAuthGuard)
  @Get('hello')
  getData(): Message {
    return this.usersService.getData();
  }

  @Post('register')
  register(@Body('email') email: string, @Body('password') password: string) {
    return this.usersService.register(email, password);
  }

  @Post('login')
  login(@Body('email') email: string, @Body('password') password: string) {
    return this.usersService.login(email, password);
  }
}
