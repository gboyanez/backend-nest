import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'hola mundo';
  }

  getHelloFrances(): string {
  	return 'frances 3';
  }

  getHelloEspanol(): string {
  	return 'espanoool';
  }


}
