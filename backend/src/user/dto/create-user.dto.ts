import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';
import { IsString, IsNotEmpty, ValidateNested, IsOptional, IsPhoneNumber, IsEmail } from 'class-validator';
import { Role } from 'src/role/entities/role.entity';
export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    type: () => Role,
    default: { id: 1 },
  })
  @Exclude()
  @Type(() => Role)
  role: Role;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  surname: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  city: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  telegram: string;

  @ApiProperty()
  @IsOptional()
  phone: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}