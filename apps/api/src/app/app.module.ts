import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '@web/users';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FirebaseModule } from '@web/firebase';
import { AuthModule } from '@web/auth';
import { JwtAuthGuard } from '@web/auth';
@Module({
  imports: [
    FirebaseModule,
    UsersModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'db',
      password: '123456',
      database: 'api',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtAuthGuard).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
