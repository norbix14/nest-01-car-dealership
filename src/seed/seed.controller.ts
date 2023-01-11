import { CreateSeedDto } from './dto';
import { SeedService } from './seed.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Post('populate')
  populate(@Body() createSeedDto: CreateSeedDto) {
    return this.seedService.populate(createSeedDto);
  }
}
