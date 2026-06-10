import { createAction, props } from "@ngrx/store";

import { IProductState } from "./product.state";

export const LoadProducts = createAction('[Product] Load Products');

export const LoadProductsSuccess = createAction(
    '[Product] Load Products Success', 
    props<{ payload: IProductState }>());

export const LoadProductsError = createAction(
    '[Product] Load Products Error', 
    props<{ error: any }>());