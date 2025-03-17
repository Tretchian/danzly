import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateGroupDto } from './create-group.dto';
import { User } from 'src/user/entities/user.entity';

export class UpdateGroupDto extends PartialType(CreateGroupDto) {
    @ApiPropertyOptional({
        type:User,
        default:{id:1}
    })
  owner: User;

  @ApiPropertyOptional({
    maxLength:63
    })
  name: string;

  @ApiPropertyOptional({
    maxLength:250
    })
  description: string;

  @ApiPropertyOptional({
    nullable:false,
    default:10
    })
  max_people: number;

  @ApiPropertyOptional({
    default:0
  })
  current_people: number;

  @ApiPropertyOptional({
    default:true
  })
  is_open: boolean;
}
