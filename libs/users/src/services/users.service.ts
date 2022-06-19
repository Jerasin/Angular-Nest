import { Inject, Injectable } from '@nestjs/common';
import { Message } from '@web/api-interfaces';
import { FirebaseService } from '@web/firebase';

@Injectable()
export class UsersService {
  @Inject(FirebaseService)
  private firebaseService: FirebaseService;

  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  async register(email: string, password: string) {
    return this.firebaseService.register(email, password);
  }

  async login(email: string, password: string) {
    return this.firebaseService.login(email, password);
  }
}
