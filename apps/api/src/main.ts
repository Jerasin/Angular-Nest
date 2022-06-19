/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as admin from 'firebase-admin';
import { AppModule } from './app/app.module';

const {
  type,
  project_id,
  private_key_id,
  private_key,
  client_email,
  client_id,
  auth_uri,
  token_uri,
  auth_provider_x509_cert_url,
  client_x509_cert_url,
} = process.env;

const firebaseConfig = {
  type: type,
  projectId: project_id,
  privateKeyId: private_key_id,
  privateKey: private_key,
  clientEmail: client_email,
  clientId: client_id,
  authUri: auth_uri,
  tokenUri: token_uri,
  authProviderX509CertUrl: auth_provider_x509_cert_url,
  clientX509CertUrl: client_x509_cert_url,
};

async function bootstrap() {
  admin.initializeApp({
    credential: admin.credential.cert({ ...firebaseConfig }),
    // databaseURL: firebaseConfig.databaseUrl
  });

  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.enableCors();
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.API_PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
