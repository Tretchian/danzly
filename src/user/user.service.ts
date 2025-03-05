import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRoleRepository } from './repositories/UserRoleRepository';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { GetUserPageDto } from './dto/get-user-page.dto';

@Injectable()
export class UserService {
  constructor(

    @InjectRepository(UserRoleRepository)
    private readonly userRoleRepository: UserRoleRepository,
    @InjectRepository(User)
    private readonly repository : Repository<User>

  ){}

  async assignRoleToUser(userId: number, roleId: number) {
    const userRole = this.userRoleRepository.create({ userId, roleId }); 
    return this.userRoleRepository.save(userRole);
  }

  async getUserRoles(userId: number) {
    return this.userRoleRepository.findRolesByUserId(userId);
  }

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.findByUsername(createUserDto.username);
    if (existingUser) {
      throw new BadRequestException(
       `Пользователь с именем ${createUserDto.username} уже существует`
      );
    }
    return  this.assignRoleToUser((await this.repository.save(createUserDto)).id,createUserDto.roleId);
  }

  async findByUsername(username: string) {
    return this.repository.findOneBy({ username });
  }

  addRole(dto: CreateUserRoleDto){
    this.userRoleRepository.addRoleToUser(dto);
  }

  //TODO Описать обработчики запросов
  findAll(){
    return this.repository.find();
  }

  findPage(pageDto: GetUserPageDto) {
    const entities_to_skip = (pageDto.entities_on_page * pageDto.page);
    console.log(pageDto);
    return this.repository.find({skip: +entities_to_skip, take:pageDto.entities_on_page});
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
