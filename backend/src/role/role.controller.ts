import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiParam } from '@nestjs/swagger';
import { IdDto } from 'src/dto/id.dto';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}


  //TODO Добавить функционал к эндпоинтам
  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Get()
  findAll() {
    return this.roleService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: 'string' })
  findOne(@Param() params: IdDto) {
    return this.roleService.findOneById(params.id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: 'string' })
  update(@Param() params: IdDto, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(params.id, updateRoleDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: 'string' })
  remove(@Param() params: IdDto) {
    return this.roleService.remove(params.id);
  }
}
