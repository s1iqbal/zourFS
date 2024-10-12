import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  @Get('hello')
  @ApiResponse({ status: 200, description: '"Hello World!"'})
  getHello(): string {
    return this.appService.getHello();
  }
}
