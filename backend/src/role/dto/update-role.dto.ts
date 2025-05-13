import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRoleDto } from './create-role.dto';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
    @ApiProperty({default:'Dancer',maxLength:20})
    name: string;

    @ApiProperty({default:'info',maxLength:200})
    description: string;
}
