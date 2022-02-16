import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersModule} from '@web/users';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../../../../ormconfig'

console.log(config)
@Module({
  imports: [UsersModule , TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "mysql",
    "port": 3306,
    "username": "db",
    "password": "123456",
    "database": "api",
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
