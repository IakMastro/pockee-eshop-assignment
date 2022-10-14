export default interface QueryData {
  lastUpdate: number;
  language: string;
  scope: string;
  data: Product[];
}

export interface Product {
  itemId: string;
  lastUpdate: number;
  store: Store;
  item: Item;
}

export interface Store {
  isFeatured: boolean;
  isRefundable: boolean;
  cost: number;
  occurrences: number;
  isNew: boolean;
}

export interface Item {
  name: string;
  description: string;
  type: string;
  rarity: string;
  series: string;
  images: Image;
  backpack: Object
  obtained_item: string;
  ratings: Ratings;
  cosmeticId: string;
}

export interface Image {
  icon: string;
  featured: string;
  background: string;
  information: string;
}

export interface Ratings {
  avgStars: number;
  totalPoints: number;
  numberVotes: number;
}