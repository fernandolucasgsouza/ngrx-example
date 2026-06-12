import { createAction, props } from '@ngrx/store';

import { IProductState } from './product.state';
import { IProduct } from '../interfaces/product.interface';

export const LoadProducts = createAction('[Product] Load Products');

export const LoadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ payload: IProduct[] }>(),
);

export const LoadProductsError = createAction(
  '[Product] Load Products Error',
  props<{ error: any }>(),
);
