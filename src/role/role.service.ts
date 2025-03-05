import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
constructor(
  @InjectRepository(Role)
  private readonly repository : Repository<Role>
  ){}
  
  async create(createRoleDto: CreateRoleDto) {
    const roleToCreate =  await this.repository.findOneBy({name:createRoleDto.name});
    if (roleToCreate){
      throw new BadRequestException(`Роль с именем name=${createRoleDto.name} уже существует!`);
    }
    return this.repository.save(createRoleDto);
  }

  findAll() {
    return this.repository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
