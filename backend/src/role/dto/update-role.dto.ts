import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRoleDto } from './create-role.dto';
import { IsString, IsOptional } from 'class-validator';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
    @ApiProperty({default:'Dancer',maxLength:20})
    @IsString()
    @IsOptional()
    name?: string;

    @ApiProperty({default:'info',maxLength:200})
    @IsString()
    @IsOptional()
    description?: string;
}
