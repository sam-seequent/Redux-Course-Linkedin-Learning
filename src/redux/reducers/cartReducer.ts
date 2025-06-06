export interface CartItem {
  readonly id: number
  price: number;
}
export interface CartState {
  items: CartItem[];
  totalPrice: number;
  rating?: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};
