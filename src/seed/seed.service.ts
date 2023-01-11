import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { CreateSeedDto } from './dto';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  populate(createSeedDto: CreateSeedDto) {
    const { cars, brands } = createSeedDto;

    const random = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const defaultCarModels = [
      'A1',
      'A2',
      'A3',
      'A4',
      'A5',
      'A6',
      'A7',
      'A8',
      'Q3',
      'Q5',
      'Q7',
      'Q8',
      'R8',
      'RS3',
      'RS4',
      'RS5',
      'RS6',
      'RS7',
      'RSQ3',
      'S3',
      'S4',
      'S5',
      'S6',
      'S7',
      'S8',
      'SQ5',
      'SQ7',
      'TT',
      'TTS',
      'TT RS',
    ];

    const defaultBrandNames = [
      'Audi',
      'BMW',
      'Citroen',
      'Fiat',
      'Ford',
      'Honda',
      'Hyundai',
      'Kia',
      'Mazda',
      'Mercedes',
      'Nissan',
      'Opel',
      'Peugeot',
      'Renault',
      'Seat',
      'Skoda',
      'Suzuki',
      'Toyota',
      'Volkswagen',
      'Volvo',
    ];

    const fillCar = ({ brands, cars, id, random }) => {
      return {
        brand: brands[random(0, brands.length - 1)],
        id,
        model: cars[random(0, cars.length - 1)],
      };
    };

    const fillBrand = ({ brands, id, random }) => {
      return {
        createdAt: new Date().getTime(),
        id,
        name: brands[random(0, brands.length - 1)],
      };
    };

    const filledCars = Array.from(Array(cars.records).keys()).map(() =>
      fillCar({
        brands:
          cars.brand_names && cars.brand_names.length > 0
            ? cars.brand_names
            : defaultBrandNames,
        cars:
          cars.car_models && cars.car_models.length > 0
            ? cars.car_models
            : defaultCarModels,
        id: uuid(),
        random,
      }),
    );
    const filledBrands = Array.from(Array(brands.records).keys()).map(() =>
      fillBrand({
        brands:
          brands.brand_names && brands.brand_names.length > 0
            ? brands.brand_names
            : defaultBrandNames,
        id: uuid(),
        random,
      }),
    );

    this.carsService.populateCarsWithSeedData(filledCars);
    this.brandsService.populateBrandsWithSeedData(filledBrands);

    return {
      data: {
        brands_filled: brands.records,
        cars_filled: cars.records,
      },
      message: 'DDBB populated with seed data',
    };
  }
}
