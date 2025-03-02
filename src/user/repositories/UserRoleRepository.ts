import { Repository } from 'typeorm';
import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UserRole } from '../entities/user_role.entity';

@Injectable()
export class UserRoleRepository extends Repository<UserRole> {
  constructor(private dataSource: DataSource) {
    super(UserRole, dataSource.createEntityManager());
  }

  async findRolesByUserId(userId: number) {
    return this.find({
      where: { userId },
      relations: ['role'],
    });
  }
}
