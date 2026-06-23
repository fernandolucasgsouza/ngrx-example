import { createReducer, on } from '@ngrx/store';

import { IProductState } from './product.state';
import {
    LoadProducts,
    LoadProductsSuccess,
    LoadProductsError,
    AddProduct,
    AddProductSuccess,
    AddProductError,
    RemoveProduct,
    RemoveProductSuccess,
    RemoveProductError,
} from './product.actions';
import { IProduct } from '../interfaces/product.interface';

export const initialProductState: IProductState = {
    data: [],
    isLoading: false,
    error: null,
};

export const productReducer = createReducer(
    initialProductState,
    on(LoadProducts, (state) => ({
        ...state,
        isLoading: true,
        error: null,
    })),
    on(LoadProductsSuccess, (state, { payload }) => ({
        ...state,
        data: payload,
        isLoading: false,
        error: null,
    })),
    on(LoadProductsError, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),
    on(AddProduct, (state) => ({
        ...state,
        isLoading: true,
        error: null,
    })),
    on(AddProductSuccess, (state, { payload }) => ({
        ...state,
        data: [...state.data, payload],
        isLoading: false,
        error: null,
    })),
    on(AddProductError, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),
      on(RemoveProduct, (state) => ({
        ...state,
        isLoading: true,
        error: null,
    })),
    on(RemoveProductSuccess, (state, { id }) => ({
        ...state,
        data: removeProductInState(state.data, id),
        isLoading: false,
        error: null,
    })),
    on(RemoveProductError, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),
);
const removeProductInState = (data: IProduct[], id: number) => data.filter(item => item.id !== id);
