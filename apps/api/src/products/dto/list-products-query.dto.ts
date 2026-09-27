import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class ListProductsQueryDto {
  @ApiPropertyOptional({ example: 'laptop' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  search?: string;
}
