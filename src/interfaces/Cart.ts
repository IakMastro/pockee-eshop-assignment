import {Product} from "@/interfaces/Product";

export default interface Cart {
  product: Product;
  quantity: number;
}