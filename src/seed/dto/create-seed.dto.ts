import { IsObject } from 'class-validator';

export class CreateSeedDto {
  @IsObject()
  cars: {
    records: number;
    car_models?: string[];
    brand_names?: string[];
  };

  @IsObject()
  brands: {
    records: number;
    brand_names?: string[];
  };
}
