export interface Pokemon {
  id: string;
  name: string;
  supertype: string;
  images: Image;
  cardmarket: Cardmarket;
  set: CartSet;
  cartCount: number;
}
export interface CartSet {
  total: number;
}
export interface Cardmarket {
  prices: Prices;
}
export interface Prices {
  averageSellPrice: number;
}
export interface Image {
  small: string;
  large: string;
}

export interface SearchBar {
  typeList: Array<string>;
  setList: Array<string>;
  rarityList: Array<string>;
}
export interface Action {
  type: string;
  payload: any;
}
export interface GetCardResponse {
  data: Array<Pokemon>;
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}
export interface SearchCriteria {
  name?: string;
  type?: string;
  rarity?: string;
  set?: string;
  pageSize: number;
  pageNumber: number;
}
export enum SearchType {
  rarities,
  types,
  sets,
}

export interface CartModel {
  [key: string]: Pokemon;
}
