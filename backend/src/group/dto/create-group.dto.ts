import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";
import { User } from "src/user/entities/user.entity";

export class CreateGroupDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  ownerId: number;

  @ApiProperty({
    maxLength:63
    })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    maxLength:250
    })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({
    nullable:false,
    default:10
    })
  @Min(1)
  @Max(999)
  @IsNumber()
  max_people: number;

  @ApiProperty({
    default:0
  })
  @IsOptional()
  current_people: number;

  @ApiProperty({
    default:true
  })
  @IsBoolean()
  @IsOptional()
  is_open: boolean;
}
