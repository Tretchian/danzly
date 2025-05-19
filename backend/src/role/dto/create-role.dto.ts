import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateRoleDto {
    @ApiProperty({default:'Dancer',maxLength:20})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({default:'info',maxLength:200})
    @IsString()
    @IsOptional()
    description: string;
}
