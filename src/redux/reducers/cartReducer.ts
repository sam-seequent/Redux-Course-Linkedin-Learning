export interface CartItem {
  id: number
  price: number;
  details?: {
    manufacturer: string;
    warranty: string;
  };
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
