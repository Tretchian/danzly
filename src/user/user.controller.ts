import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserRoleDto} from './dto/create-user-role.dto';
import { GetUserPageDto } from './dto/get-user-page.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('role')
  updateRole(@Body() dto: CreateUserRoleDto) {
    return this.userService.addRole(dto);
  }

 


  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':page')
  findPage(@Query() getPageDto: GetUserPageDto) {
    return this.userService.findPage(getPageDto);
  }
  //TODO Добавить функционал и обращение к БД к эндпоинтам
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
