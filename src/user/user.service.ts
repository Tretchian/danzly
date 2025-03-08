import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { GetUserPageDto } from './dto/get-user-page.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository : Repository<User>

  ){}

  async getUserRole(userId: number) {
    return this.repository.find({select:{role_id:true},where:{id:userId}})
  }

  async changeRole(userId: number, newRoleId:number){
    const userToChange = await this.repository.findOneByOrFail({id:userId});
    userToChange.role_id = newRoleId;
    return this.repository.save(userToChange);
  } //TODO протестировать правильно ли меняются данные

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.findByUsername(createUserDto.username);
    if (existingUser) {
      throw new BadRequestException(
       `Пользователь с именем ${createUserDto.username} уже существует`
      );
    }
    return  this.repository.create(createUserDto);
  }

  async findByUsername(username: string) {
    return this.repository.findOneBy({ username });
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
