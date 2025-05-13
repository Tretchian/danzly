import { ApiProperty } from '@nestjs/swagger';
export class GetPageDto {
  @ApiProperty({ default: 0 })
  page: number;
  @ApiProperty({ default: 2 })
  entities_on_page: number;
}
