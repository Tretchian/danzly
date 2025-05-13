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
import { GetPageDto } from '../dto/get-page.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch() // TODO а нужен ли теперь отдельный эндпоинт для обновления роли?
  updateRole(@Query('userId') userId:number,@Query('newRoleId') newRoleId:number) {
    return this.userService.updateRole(userId,newRoleId);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':page')
  findPage(@Query() getPageDto: GetPageDto) {
    return this.userService.findPage(getPageDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
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
