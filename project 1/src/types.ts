export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  category: string;
  badge?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}