import { createAction, props } from '@ngrx/store';

import { IProduct, IProductBase } from '../../interfaces/product.interface';

export const LoadProducts = createAction('[List Product Component] Load Products');
export const LoadProductsSuccess = createAction( '[List Product Effect] Load Products Success',props<{ payload: IProduct[] }>(),);
export const LoadProductsError = createAction('[List Product Effect] Load Products Error', props<{ error: any }>());

export const AddProduct = createAction('[Create Product Component] Add Product', props<{ payload: IProductBase }>());
export const AddProductSuccess = createAction('[Create Product Effect] Add Product Success', props<{ payload: IProduct }>());
export const AddProductError = createAction('[Create Product Effect] Add Product Error', props<{ error: any }>());

export const RemoveProduct = createAction('[List Product Component] Remove Product', props<{ id: number }>());
export const RemoveProductSuccess = createAction('[List Product Effect] Remove Product Success', props<{ id: number }>());
export const RemoveProductError = createAction('[List Product Effect] Remove Product Error', props<{ error: any }>());
