import { createAction, props } from '@ngrx/store';

import { IProduct, IProductBase } from '../interfaces/product.interface';

export const LoadProducts = createAction('[Product] Load Products');
export const LoadProductsSuccess = createAction( '[Product] Load Products Success',props<{ payload: IProduct[] }>(),);
export const LoadProductsError = createAction('[Product] Load Products Error', props<{ error: any }>());

export const AddProduct = createAction('[Product] Add Product', props<{ payload: IProductBase }>());
export const AddProductSuccess = createAction('[Product] Add Product Success', props<{ payload: IProduct }>());
export const AddProductError = createAction('[Product] Add Product Error', props<{ error: any }>());

export const RemoveProduct = createAction('[Product] Remove Product', props<{ id: number }>());
export const RemoveProductSuccess = createAction('[Product] Remove Product Success', props<{ id: number }>());
export const RemoveProductError = createAction('[Product] Remove Product Error', props<{ error: any }>());
