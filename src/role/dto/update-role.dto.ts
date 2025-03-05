import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRoleDto } from './create-role.dto';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
    @ApiProperty({default:'Dancer',maxLength:10})
    name: string;

    @ApiProperty({default:'role description'})
    description:string;
}
