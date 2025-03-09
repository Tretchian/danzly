import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({})
  username: string;

  @ApiProperty()
  role_id: number;

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

  //TODO add data validation for email
  
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
