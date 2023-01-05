import { CarsModule } from './cars/cars.module';
import { Module } from '@nestjs/common';

@Module({
  controllers: [],
  exports: [],
  imports: [CarsModule],
  providers: [],
})
export class AppModule {}
