import { CarsService } from './cars.service';
import { Controller } from '@nestjs/common';
import {
  Body,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common/decorators';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
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
  updateCar(@Param('id') id: string, @Body() body: any) {
    return {
      body,
      id,
      message: 'Car updated',
      method: 'PATCH',
    };
  }

  @Delete(':id')
  deleteCar(@Param('id') id: string) {
    return {
      id,
      message: 'Car deleted',
      method: 'DELETE',
    };
  }
}
