import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty({default:'Dancer',maxLength:20})
    name: string;

    @ApiProperty({default:'info',maxLength:200})
    description: string;
}
