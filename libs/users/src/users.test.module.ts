import { Test } from '@nestjs/testing';
import {UsersService} from './services/users.service'
import {UsersController} from './controllers/users.controller'

export const UserTestModule = async ()=>{
  return  await Test.createTestingModule({
        controllers: [UsersController],
        providers: [UsersService],
      }).compile();
}