import { UsersService } from './users.service';
import {UserTestModule} from '../users.test.module'

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module = await UserTestModule();

    service = module.get(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
