import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { GetPageDto } from '../dto/get-page.dto';
import { IdDto } from 'src/dto/id.dto';
import { ApiParam } from '@nestjs/swagger';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  @Get()
  findAll() {
    return this.groupService.findAll();
  }

  @Get('page')
  findPage(@Query() getPageDto: GetPageDto) {
    return this.groupService.findPage(getPageDto);
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: 'string' })
  findOne(@Param() params: IdDto) {
    return this.groupService.findOneById(params.id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: 'string' })
  update(@Param() params: IdDto, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupService.update(params.id, updateGroupDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: 'string' })
  remove(@Param() params: IdDto) {
    return this.groupService.remove(params.id);
  }
}
