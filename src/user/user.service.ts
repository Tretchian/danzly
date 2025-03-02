import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRoleRepository } from './repositories/UserRoleRepository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRoleRepository: UserRoleRepository
  ){}


  async assignRoleToUser(userId: number, roleId: number) {
    const userRole = this.userRoleRepository.create({ userId, roleId });  // 👈 Используем userId и roleId
    return this.userRoleRepository.save(userRole);
  }

  async getUserRoles(userId: number) {
    return this.userRoleRepository.findRolesByUserId(userId);
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
