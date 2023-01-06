import { Car } from 'src/cars/interfaces/cars.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    brand: 'Ford',
    id: uuid(),
    model: 'Fusion Hybrid',
  },
  {
    brand: 'Toyota',
    id: uuid(),
    model: 'Corolla',
  },
  {
    brand: 'Honda',
    id: uuid(),
    model: 'Civic',
  },
];
