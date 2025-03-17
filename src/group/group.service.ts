import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private readonly repository: Repository<Group>
  ){}

  async create(createGroupDto: CreateGroupDto) {
    return this.repository.save(createGroupDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneByOrFail({id});
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    const existingGroup = await this.repository.findOneBy({id});
    if(!existingGroup){
      throw new BadRequestException(
        `Группы с id ${id} не существует`
      );
    }
    Object.keys(updateGroupDto).forEach((key) =>{
      if (updateGroupDto[key] !== null && updateGroupDto !== undefined){
        existingGroup[key] = updateGroupDto[key];
      }
    });
    return this.repository.save(existingGroup);
  }

  async remove(id: number) {
    if(! await this.repository.existsBy({id})){
      throw new BadRequestException(
        `Группы с id ${id} не существует`
      )
    }
    return this.repository.delete({id});
  }
}
