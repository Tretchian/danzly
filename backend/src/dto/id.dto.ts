import { IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class IdDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  id: number;
}