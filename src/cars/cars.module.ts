import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [CarsController],
  exports: [CarsService],
  providers: [CarsService],
})
export class CarsModule {}
