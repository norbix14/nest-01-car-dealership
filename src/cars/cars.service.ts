import { Car } from './interfaces/cars.interface';
import { v4 as uuid } from 'uuid';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      brand: 'Ford',
      id: uuid(),
      model: 'Fusion Hybrid',
    },
    {
      brand: 'Tesla',
      id: uuid(),
      model: 'Model S',
    },
    {
      brand: 'Toyota',
      id: uuid(),
      model: 'Prius',
    },
    {
      brand: 'BMW',
      id: uuid(),
      model: 'i3',
    },
  ];

  public findAll() {
    return this.cars;
  }

  public findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with ID '${id}' not found`);
    return car;
  }
}
