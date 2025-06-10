import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { DbManagerService } from './db-manager/db-manager.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dbManagerService: DbManagerService
  ) {}

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

  @Get('user')
  getUser(@Query('id') id: number){
    return this.dbManagerService.getUser(id);
  }

}
