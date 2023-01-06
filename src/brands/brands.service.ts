import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto, UpdateBrandDto } from './dto';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [];

  populateBrandsWithSeedData(brandsSeed: Brand[]) {
    this.brands = brandsSeed;
  }

  create(createBrandDto: CreateBrandDto) {
    const id = uuid();
    const { name } = createBrandDto;
    const brand: Brand = {
      createdAt: new Date().getTime(),
      id,
      name: name.toLowerCase(),
    };
    this.brands.push(brand);
    return {
      id,
      message: 'Brand created successfully',
    };
  }

  findAll(): Brand[] {
    return this.brands;
  }

  findOneById(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand #${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOneById(id);
    this.brands.map((brand) => {
      if (brand.id === id) {
        brandDB.updatedAt = new Date().getTime();
        brandDB = {
          ...brandDB,
          ...updateBrandDto,
        };
        return brandDB;
      }
      return brand;
    });
    return {
      brand: brandDB,
      id,
      message: 'Brand updated successfully',
    };
  }

  remove(id: string) {
    this.findOneById(id);
    this.brands = this.brands.filter((brand) => brand.id !== id);
    return {
      id,
      message: 'Brand deleted successfully',
    };
  }
}
