import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import * as firebase from 'firebase-admin';

@Injectable()
export class FirebaseService {
  private firebaseApp;

  constructor() {
    this.firebaseApp = firebase;
  }

  getAuth = (): firebase.auth.Auth => {
    return this.firebaseApp.auth();
  };

  firestore = (): firebase.firestore.Firestore => {
    return this.firebaseApp.firestore();
  };

  async login(email: string, password: string) {
    const account = await this.firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        if (err.code === 'auth/user-not-found') {
          return {};
        }
      });

    return account;
  }

  async register(email: string, password: string) {
    return this.firebaseApp
      .auth()
      .createUser({
        email,
        password,
      })
      .catch((err) => {
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
      });
  }
}
