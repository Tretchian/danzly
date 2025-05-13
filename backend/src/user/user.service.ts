import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { GetPageDto } from '../dto/get-page.dto';
import { Role } from 'src/role/entities/role.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  [x: string]: any;
  constructor(
    @InjectRepository(User)
    private readonly repository : Repository<User>,
    private readonly jwtService: JwtService, 

    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>
  ){}

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.findByUsername(createUserDto.username);
    if (existingUser) {
      throw new BadRequestException(
       `Пользователь с именем ${createUserDto.username} уже существует`
      );
   }

    const token = this.jwtService.sign({ email: createUserDto.email})

    return  { user: this.repository.save(createUserDto), token: token };
  }

  async getUserRole(userId: number) {
    return this.repository.findOne({relations:['role'],where:{id:userId}})
  }

  async findByUsername(username: string) {
    return this.repository.findOneBy({ username });
  }

  findAll(){
    return this.repository.find();
  }

  findPage(pageDto: GetPageDto) {
    const entities_to_skip = (pageDto.entities_on_page * pageDto.page);
    console.log(pageDto);
    return this.repository.find({skip: +entities_to_skip, take: +pageDto.entities_on_page});
  }

  async findOneByEmail(email: string) {
    return await this.userRepository.findOne ({
      where: {
        email,
      },
    });
  }
  
  async update(id: number, updateUserDto: UpdateUserDto) {
    const existingUser = await this.repository.findOneBy({id});
    if (!existingUser) {
      throw new BadRequestException(
       `Пользователя  с id ${id} не сущестует`
      );
    }

    // Динамически обновляем все поля, кроме undefined и null
    Object.keys(updateUserDto).forEach((key) => {
      if (updateUserDto[key] !== null && updateUserDto[key] !== undefined) {
          existingUser[key] = updateUserDto[key];
      }
    });
    return  this.repository.save(existingUser);
  }

  async updateRole(userId: number, newRoleId:number){
    const userToChange = await this.repository.findOneByOrFail({id:userId}); //TODO - добавить проверку на null > заменить на findOneBy 
    const newRole = await this.roleRepository.findOneByOrFail({id:newRoleId});
    userToChange.role = newRole
    return this.repository.save(userToChange);
  }

  async remove(id: number) {
    if (!await this.repository.existsBy({id})){
      throw new BadRequestException(
        `Пользователя с id ${id} не сущестует`
      )
    }
    return this.repository.delete({id});
  }
}
