import { Car } from './interfaces/cars.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dtos';
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

  public findAll(): Car[] {
    return this.cars;
  }

  public findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with ID '${id}' not found`);
    return car;
  }

  public create(createCarDto: CreateCarDto) {
    const id = uuid();
    const car: Car = {
      id,
      ...createCarDto,
    };
    this.cars.push(car);
    return {
      id,
      message: 'Car created',
    };
  }

  public update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...car, ...updateCarDto, id };
        return carDB;
      }
      return car;
    });
    return {
      car: carDB,
      id,
      message: 'Car updated',
    };
  }

  public deleteOneById(id: string) {
    this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return {
      id,
      message: 'Car deleted',
    };
  }
}
