import { Controller, ParseIntPipe } from '@nestjs/common';
import {
  Body,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common/decorators';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() body: any) {
    return {
      body,
      message: 'Car created',
      method: 'POST',
    };
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return {
      body,
      id,
      message: 'Car updated',
      method: 'PATCH',
    };
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
      message: 'Car deleted',
      method: 'DELETE',
    };
  }
}
