import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbManagerService } from './db-manager/db-manager.service';
import { mock } from 'node:test';

describe('AppController', () => {
  let appController: AppController;
  let mockDbService: { getUser: jest.Mock };

  beforeEach(async () => {

    mockDbService = {
      getUser : jest.fn().mockReturnValue({id: 1, nombre: 'Gabriel'}),
    }
    
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, 
        { provide: DbManagerService, useValue: mockDbService}
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('Probar el modulo raiz del proyecto', () => {
    it('Esto deberia retornar hola mundo en ingles', () => {
      expect(appController.getHello()).toBe('hola mundo');
    });
  });

  it('Deberia buscar un id por usuario', () => {
    expect(appController.getUser(10)).toEqual({id: 1, nombre: 'Gabriel'});
    expect(mockDbService.getUser).toHaveBeenCalledWith(10);
  });

});
