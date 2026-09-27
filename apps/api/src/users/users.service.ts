import { Injectable } from '@nestjs/common';
import type { User } from '@catalog/contracts';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { id: 'u-1', name: 'Alex Morgan', email: 'alex@example.test', role: 'admin' },
    { id: 'u-2', name: 'Sam Lee', email: 'sam@example.test', role: 'viewer' },
  ];

  findAll(): User[] {
    return this.users;
  }
}
