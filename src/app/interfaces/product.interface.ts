export interface IProductBase {
  unitPrice: string;
  name: string;
  amount: number;
}
export interface IProduct extends IProductBase {
  id: number;
}
