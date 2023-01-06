import { BrandsService } from './brands.service';
import { ParseUUIDPipe } from '@nestjs/common/pipes';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from './dto';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandsService.create(createBrandDto);
  }

  @Get()
  findAll() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id', ParseUUIDPipe) id: string) {
    return this.brandsService.findOneById(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateBrandDto: UpdateBrandDto,
  ) {
    return this.brandsService.update(id, updateBrandDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.brandsService.remove(id);
  }
}
