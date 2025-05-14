import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { Role } from 'src/role/entities/role.entity';
import { Exclude } from 'class-transformer';
import { IsString, IsOptional } from 'class-validator';

export class UpdateUserDto {
  
    @ApiProperty({
        type:Role,
        default:{id:1}
    })
    @Exclude()
    role: Role;
  
    @ApiProperty({})
    @IsString()
    @IsOptional()
    name: string;
  
    @ApiProperty({})
    @IsString()
    @IsOptional()
    surname: string;
  
    //TODO avatar image field for user
  
    @ApiProperty({})
    @IsString()
    @IsOptional()
    city: string;
  
    @ApiProperty({})
    @IsString()
    @IsOptional()
    telegram: string;
  
    @ApiProperty({})
    @IsString()
    @IsOptional()
    phone: string;
  
    @ApiProperty()
    @IsString()
    @IsOptional()
    email: string;
  
    @ApiProperty()
    @IsString()
    @IsOptional()
    password: string;
}
