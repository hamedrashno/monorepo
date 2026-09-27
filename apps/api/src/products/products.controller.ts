import { Body, Controller, Get, Inject, Param, Post, Query, Version } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import type { Product } from '@catalog/contracts';
import type { CreateProductDto } from './dto/create-product.dto';
import type { ListProductsQueryDto } from './dto/list-products-query.dto';
import { ProductsService } from './products.service';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(@Inject(ProductsService) private readonly productsService: ProductsService) {}

  @Get()
  @Version('1')
  @ApiOkResponse({ description: 'Lists sample products.' })
  findAll(@Query() query: ListProductsQueryDto): Product[] {
    return this.productsService.findAll(query.search);
  }

  @Get(':id')
  @Version('1')
  @ApiOkResponse({ description: 'Returns one sample product.' })
  findOne(@Param('id') id: string): Product {
    return this.productsService.findOne(id);
  }

  @Post()
  @Version('1')
  @ApiCreatedResponse({ description: 'Creates a product in memory for the current process.' })
  create(@Body() input: CreateProductDto): Product {
    return this.productsService.create(input);
  }
}
