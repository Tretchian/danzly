import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/entities/user.entity";

export class CreateGroupDto {
    @ApiProperty({
        type:User,
        default:{id:1}
    })
  owner: User;

  @ApiProperty({
    maxLength:63
    })
  name: string;

  @ApiProperty({
    maxLength:250
    })
  description: string;

  @ApiProperty({
    nullable:false,
    default:10
    })
  max_people: number;

  @ApiProperty({
    default:0
  })
  current_people: number;

  @ApiProperty({
    default:true
  })
  is_open: boolean;
}
