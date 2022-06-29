import { Controller, Get, Param,HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('calculadora')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("suma/:num1/:num2")
  getSuma(@Param('num1') num1:number,@Param('num2') num2:number): string {
    return this.appService.getSuma(num1,num2);
  }
  @Get("resta/:num1/:num2")
  getResta(@Param('num1') num1:number,@Param('num2') num2:number): string {
    return this.appService.getResta(num1,num2);
  }
  @Get("multiplicacion/:num1/:num2")
  getMultiplicacion(@Param('num1') num1:number,@Param('num2') num2:number): string {
    return this.appService.getMultiplicacion(num1,num2);
  }
  @Get("elevacion/:num1/:num2")
  getElevacion(@Param('num1') num1:number,@Param('num2') num2:number): string {
    return this.appService.getElevacion(num1,num2);
  }
  @Get("healthcheck")
  @HttpCode(200)
  getHealtcheck (): string {
    return this.appService.getHealtcheck();
  }
}
