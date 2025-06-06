import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('bonjour')
  getHelloFrances(): string {
  	return this.appService.getHelloFrances();
  }

  @Get('espanol')
  getHelloEspanol(): string {
    return this.appService.getHelloEspanol();
  }
}
