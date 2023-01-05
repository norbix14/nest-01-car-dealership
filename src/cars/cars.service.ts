import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      brand: 'Ford',
      id: 1,
      model: 'Fusion Hybrid',
    },
    {
      brand: 'Tesla',
      id: 2,
      model: 'Model S',
    },
    {
      brand: 'Toyota',
      id: 3,
      model: 'Prius',
    },
    {
      brand: 'BMW',
      id: 4,
      model: 'i3',
    },
  ];

  public findAll() {
    return this.cars;
  }

  public findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with ID '${id}' not found`);
    return car;
  }
}
