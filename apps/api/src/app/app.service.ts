import { Injectable } from '@nestjs/common';
import { Message , ItemList } from '@web/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'kkk' };
  }

  getArrayData(): ItemList {
    return { result: ['kkk','aaa', 'bbb' ,'ccc'] };
  }
}
