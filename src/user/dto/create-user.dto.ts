import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/role/entities/role.entity';
export class CreateUserDto {
  @ApiProperty({})
  username: string;

  @ApiProperty({default:{id:1}})
  role:Role;

  @ApiProperty({})
  name: string;

  @ApiProperty({})
  surname: string;

  //TODO avatar image field for user

  @ApiProperty({})
  city: string;

  @ApiProperty({})
  telegram: string;

  @ApiProperty({})
  phone: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
