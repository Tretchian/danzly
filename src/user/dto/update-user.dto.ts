import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
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
  
    @ApiProperty()
    email: string;
  
    @ApiProperty()
    password: string;
}
