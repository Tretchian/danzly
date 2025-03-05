import { ApiProperty } from '@nestjs/swagger';
export class GetUserPageDto {
  @ApiProperty({ default: 0 })
  page: number;
  @ApiProperty({ default: 2 })
  entities_on_page: number;
}
