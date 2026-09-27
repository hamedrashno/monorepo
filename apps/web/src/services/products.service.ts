import type { ApiSuccess, Product } from '@catalog/contracts';
import { http } from '@/lib/http';

export async function getProducts(search?: string): Promise<Product[]> {
  const response = await http.get<ApiSuccess<Product[]>>('/products', { params: { search } });
  return response.data.data;
}

export async function getProduct(id: string): Promise<Product> {
  const response = await http.get<ApiSuccess<Product>>(`/products/${id}`);
  return response.data.data;
}
