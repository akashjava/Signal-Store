export type OrdersState = {
  orders: any[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

export const initialState: OrdersState = {
  orders: [],
  isLoading: false,
  filter: { query: '', order: 'asc' },
};
