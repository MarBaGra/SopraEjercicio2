export interface Product {
  product: string;
  price: number;
  currency: string;
  rating: number;
  description: string;
  similarProducts?: Product[] | null;
  reviews?: Review[] | null;
}

export interface Review {
  image: string;
  name: string;
  raging: number;
  opinion: string;
  date: string;
}
