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
    return this.repository.findOneByOrFail({id});
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const existingRole = await this.repository.findOneByOrFail({id});
    if (!existingRole) {
      throw new BadRequestException(
       `Роли с id ${id} не сущестует`
      );
    }
    // Динамически обновляем все поля, кроме undefined и null
    Object.keys(updateRoleDto).forEach((key) => {
      if (updateRoleDto[key] !== null && updateRoleDto[key] !== undefined) {
          existingRole[key] = updateRoleDto[key];
      }
    });
    return  this.repository.save(existingRole);
  }

  async remove(id: number) {
    if (!await this.repository.existsBy({id})){
      throw new BadRequestException(
        `Роли с id ${id} не сущестует`
      )
    }
    return this.repository.delete({id}); //TODO удаление ролей и у юзеров?
  }
}
