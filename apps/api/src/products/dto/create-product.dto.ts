import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, IsString, IsUrl, Length, Min } from 'class-validator';
import type { CreateProductInput } from '@catalog/contracts';

export class CreateProductDto implements CreateProductInput {
  @ApiProperty({ example: 'Orbit Mechanical Keyboard' })
  @IsString()
  @Length(2, 120)
  name!: string;

  @ApiProperty({ example: 'Accessories' })
  @IsString()
  @Length(2, 80)
  category!: string;

  @ApiProperty({ example: 149.99, minimum: 0 })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  price!: number;

  @ApiProperty({ example: 'A compact keyboard designed for focused work.' })
  @IsString()
  @Length(10, 1000)
  description!: string;

  @ApiPropertyOptional({ example: true, default: true })
  @IsOptional()
  @IsBoolean()
  inStock?: boolean;

  @ApiPropertyOptional({ example: 'https://images.example.test/keyboard.jpg' })
  @IsOptional()
  @IsUrl({ require_tld: false })
  @Transform(({ value }: { value: unknown }) => (typeof value === 'string' ? value.trim() : value))
  imageUrl?: string;
}
