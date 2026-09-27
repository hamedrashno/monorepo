import { Injectable, NotFoundException } from '@nestjs/common';
import type { CreateProductInput, Product } from '@catalog/contracts';

const defaultImage = '/products/nova-laptop.png';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [
    {
      id: 'p-1',
      name: 'Nova Laptop 14',
      category: 'Computers',
      price: 999,
      currency: 'USD',
      description: 'A compact laptop with a bright display and all-day battery.',
      inStock: true,
      imageUrl: defaultImage,
    },
    {
      id: 'p-2',
      name: 'Pulse Wireless Headphones',
      category: 'Audio',
      price: 299,
      currency: 'USD',
      description: 'Comfortable over-ear headphones with clear, balanced sound.',
      inStock: true,
      imageUrl: '/products/pulse-headphones.png',
    },
    {
      id: 'p-3',
      name: 'Ergo Office Chair',
      category: 'Furniture',
      price: 449,
      currency: 'USD',
      description: 'An adjustable ergonomic chair for calm, focused workdays.',
      inStock: true,
      imageUrl: '/products/ergo-chair.png',
    },
  ];

  findAll(search?: string): Product[] {
    const normalizedSearch = search?.trim().toLocaleLowerCase();
    if (!normalizedSearch) return this.products;
    return this.products.filter((product) =>
      [product.name, product.category, product.description].some((value) =>
        value.toLocaleLowerCase().includes(normalizedSearch),
      ),
    );
  }

  findOne(id: string): Product {
    const product = this.products.find((item) => item.id === id);
    if (!product) throw new NotFoundException(`Product ${id} was not found.`);
    return product;
  }

  create(input: CreateProductInput): Product {
    const product: Product = {
      id: `p-${this.products.length + 1}`,
      ...input,
      currency: 'USD',
      inStock: input.inStock ?? true,
      imageUrl: input.imageUrl ?? defaultImage,
    };
    this.products.push(product);
    return product;
  }
}
