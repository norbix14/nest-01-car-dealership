import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

@Module({
  controllers: [],
  exports: [],
  imports: [CarsModule],
  providers: [],
})
export class AppModule {}
