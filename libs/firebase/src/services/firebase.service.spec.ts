import { Test } from '@nestjs/testing';
import { FirebaseService } from './firebase.service';

describe('FirebaseService', () => {
  let service: FirebaseService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FirebaseService],
    }).compile();

    service = module.get(FirebaseService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
