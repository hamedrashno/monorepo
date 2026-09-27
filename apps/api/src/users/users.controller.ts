import { Controller, Get, Inject, Version } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import type { User } from '@catalog/contracts';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(@Inject(UsersService) private readonly usersService: UsersService) {}

  @Get()
  @Version('1')
  @ApiOkResponse({ description: 'Lists hard-coded sample users.' })
  findAll(): User[] {
    return this.usersService.findAll();
  }
}
