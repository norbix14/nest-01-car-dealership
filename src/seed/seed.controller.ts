import { SeedService } from './seed.service';
import { Controller, Post } from '@nestjs/common';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Post()
  populate() {
    return this.seedService.populate();
  }
}
