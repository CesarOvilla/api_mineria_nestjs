import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getSuma(num1:number,num2:number): string {
    return String(Number(num1) + Number(num2));
  }
  getResta(num1:number,num2:number): string {
    return String(Number(num1) - Number(num2));
  }
  getMultiplicacion(num1:number,num2:number): string {
    return String(Number(num1) * Number(num2));
  }
  getElevacion(num1:number,num2:number): string {
    return String(Number(num1) ** Number(num2));
  }
}
