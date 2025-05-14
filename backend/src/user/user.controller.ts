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
import { UserIdDto } from './dto/user-id.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
// TODO а нужен ли теперь отдельный эндпоинт для обновления роли?
  @Patch() 
  updateRole(@Query('userId') userId:number,@Query('newRoleId') newRoleId:number) {
    return this.userService.updateRole(userId,newRoleId);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('page')
  findPage(@Query() getPageDto: GetPageDto) {
    return this.userService.findPage(getPageDto);
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: 'string' })
  findOne(@Param() params: UserIdDto) {
    return this.userService.findOneById(params.id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: Number })
  update(@Param() params: UserIdDto, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(params.id, updateUserDto);
  }


  @Delete(':id')
  @ApiParam({ name: 'id', type: Number })
  remove(@Param() params: UserIdDto) {
    return this.userService.remove(params.id);
  }
}
