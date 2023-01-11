import {
  IsInt,
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  Min,
} from 'class-validator';

export class BrandsSeed {
  @IsOptional()
  readonly brand_names?: string[];

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  readonly records: number;
}

export class CarsSeed {
  @IsOptional()
  readonly brand_names?: string[];

  @IsOptional()
  readonly car_models?: string[];

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  readonly records: number;
}

export class CreateSeedDto {
  @IsNotEmptyObject()
  readonly brands: BrandsSeed;

  @IsNotEmptyObject()
  readonly cars: CarsSeed;
}
