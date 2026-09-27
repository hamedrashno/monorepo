export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: 'USD';
  description: string;
  inStock: boolean;
  imageUrl: string;
}

export interface CreateProductInput {
  name: string;
  category: string;
  price: number;
  description: string;
  inStock?: boolean;
  imageUrl?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'viewer';
}

export interface ApiSuccess<T> {
  success: true;
  data: T;
}

export interface ApiError {
  success: false;
  error: {
    statusCode: number;
    message: string | string[];
    timestamp: string;
    path: string;
  };
}
