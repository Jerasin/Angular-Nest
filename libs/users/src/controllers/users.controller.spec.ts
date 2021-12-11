import { UsersController } from './users.controller';
import {UserTestModule} from '../users.test.module'

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module = await UserTestModule();

    controller = module.get(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
