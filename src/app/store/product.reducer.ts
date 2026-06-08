import { createReducer, on } from "@ngrx/store";

import { IProductState } from "./product.state";
import { LoadProducts, LoadProductsSuccess, LoadProductsError } from "./product.actions";

export const initialProductState: IProductState = {
    data: [],
    isLoading: false,
    error: null
};

export const productReducer = createReducer(
    initialProductState,
    on(LoadProducts, (state) => ({
        ...state,
        isLoading: true,
        error: null
    })),
    on(LoadProductsSuccess, (state, { payload }) => ({
        ...state,
        data: payload.data,
        isLoading: false,
        error: null
    })),
    on(LoadProductsError, (state, { error }) => ({
        ...state,
        isLoading: false,
        error
    }))
);