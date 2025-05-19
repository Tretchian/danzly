import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';
import { GetPageDto } from 'src/dto/get-page.dto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private readonly repository: Repository<Group>,

    @InjectRepository(User)
    private readonly userRepository : Repository<User>
  ){}

  async create(createGroupDto: CreateGroupDto) {
    const ownerId = createGroupDto.ownerId;
    if (!(await this.userRepository.existsBy({ id: ownerId }))) {
      throw new BadRequestException(`Пользователь с id ${ownerId} не существует`);
    }
    const group = this.repository.create({
      ...createGroupDto,
      owner: { id: ownerId },
    });

    return this.repository.save(group);
  }

  findAll() {
    return this.repository.find();
  }

  findOneById(id: number) {
    return this.repository.findOneBy({id});
  }

  findPage(pageDto: GetPageDto) {
    const entities_to_skip = (pageDto.entities_on_page * pageDto.page);
    console.log(pageDto);
    return this.repository.find({skip: +entities_to_skip, take: +pageDto.entities_on_page});
  }
  

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    const existingGroup = await this.repository.findOneBy({id});
    if(!existingGroup){
      throw new BadRequestException(
        `Группы с id ${id} не существует`
      );
    }

    if (updateGroupDto.ownerId !== undefined && updateGroupDto.ownerId !== null) {
      const ownerExists = await this.userRepository.existsBy({ id: updateGroupDto.ownerId });
      if (!ownerExists) {
        throw new BadRequestException(`Пользователь с id ${updateGroupDto.ownerId} не существует`);
      }
      existingGroup.owner = { id: updateGroupDto.ownerId } as any;
    }

    Object.keys(updateGroupDto).forEach((key) =>{
      if (updateGroupDto[key] !== null && updateGroupDto !== undefined && key !== 'ownerId'){
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
