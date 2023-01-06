import { BRANDS_SEED } from './data/brands.seed';
import { BrandsService } from 'src/brands/brands.service';
import { CARS_SEED } from './data/cars.seed';
import { CarsService } from 'src/cars/cars.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  populate() {
    this.carsService.populateCarsWithSeedData(CARS_SEED);
    this.brandsService.populateBrandsWithSeedData(BRANDS_SEED);
    return 'DDBB populated with seed data';
  }
}
