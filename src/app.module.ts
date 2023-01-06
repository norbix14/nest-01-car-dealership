import { BrandsModule } from './brands/brands.module';
import { CarsModule } from './cars/cars.module';
import { Module } from '@nestjs/common';
import { SeedModule } from './seed/seed.module';

@Module({
  controllers: [],
  exports: [],
  imports: [CarsModule, BrandsModule, SeedModule],
  providers: [],
})
export class AppModule {}
