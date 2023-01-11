import { Brand } from 'src/brands/entities/brand.entity';
import { BrandsService } from 'src/brands/brands.service';
import { Car } from 'src/cars/interfaces/cars.interface';
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

  private brandNames: string[] = [
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

  private carModels: string[] = [
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

  private random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private isValidObject(object: object): boolean {
    if (!object || Object.keys(object).length === 0) {
      return false;
    }
    return true;
  }

  private isValidArray(array: any[]): boolean {
    if (!array || array.length === 0) {
      return false;
    }
    return true;
  }

  private fromNumberToArray(number: number): number[] {
    if (!number || number <= 0) {
      return [];
    }
    return Array.from(Array(number).keys());
  }

  private fillCar({ brands, cars, id, random }): Car {
    return {
      brand: brands[random(0, brands.length - 1)],
      id,
      model: cars[random(0, cars.length - 1)],
    };
  }

  private fillBrand({ brands, id, random }): Brand {
    return {
      createdAt: new Date().getTime(),
      id,
      name: brands[random(0, brands.length - 1)],
    };
  }

  populate(createSeedDto: CreateSeedDto) {
    const { cars, brands } = createSeedDto;

    const filledCars = this.fromNumberToArray(cars.records).map(() =>
      this.fillCar({
        brands: this.isValidArray(cars.brand_names)
          ? cars.brand_names
          : this.brandNames,
        cars: this.isValidArray(cars.car_models)
          ? cars.car_models
          : this.carModels,
        id: uuid(),
        random: this.random,
      }),
    );

    const filledBrands = this.fromNumberToArray(brands.records).map(() =>
      this.fillBrand({
        brands: this.isValidArray(brands.brand_names)
          ? brands.brand_names
          : this.brandNames,
        id: uuid(),
        random: this.random,
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
