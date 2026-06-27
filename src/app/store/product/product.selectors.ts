import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IProductState } from "./product.state.interface";

const loadProductsState = createFeatureSelector<IProductState>('products');

export const selectProducts = createSelector(
  loadProductsState,
  (state: IProductState) => state.data
);

export const selectIsLoading = createSelector(
  loadProductsState,
  (state: IProductState) => state.isLoading
);

export const selectIsError = createSelector(
  loadProductsState,
  (state: IProductState) => state.error
);