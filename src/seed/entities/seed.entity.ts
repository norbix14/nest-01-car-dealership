export class SeedEntityCars {
  records: number;
  car_models?: string[];
}

export class SeedEntityBrands {
  records: number;
  brand_names?: string[];
}

export class SeedEntity {
  cars: SeedEntityCars;
  brands: SeedEntityBrands;
}
