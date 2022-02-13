import { Controller, Get } from '@nestjs/common';

import { Message , ItemList } from '@web/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('itemList')
  getArrayData(): ItemList {
    return this.appService.getArrayData();
  }
}
