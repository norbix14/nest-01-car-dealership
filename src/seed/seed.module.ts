import { BrandsModule } from 'src/brands/brands.module';
import { CarsModule } from 'src/cars/cars.module';
import { Module } from '@nestjs/common';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';

@Module({
  controllers: [SeedController],
  imports: [CarsModule, BrandsModule],
  providers: [SeedService],
})
export class SeedModule {}
