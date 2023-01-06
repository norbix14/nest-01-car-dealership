// import { CreateBrandDto } from './create-brand.dto';
// import { PartialType } from '@nestjs/mapped-types';
import { IsString, MinLength } from 'class-validator';

/* export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @IsString()
  @MinLength(2)
  name: string;
} */

export class UpdateBrandDto {
  @IsString()
  @MinLength(2)
  name: string;
}
