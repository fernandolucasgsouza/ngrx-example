import { createReducer, on } from "@ngrx/store";

import { IProductState } from "./product.state";
import { LoadProducts, LoadProductsSuccess, LoadProductsError } from "./product.actions";

export const initialProductState: IProductState = {
    data: [
     { id: '1', unitPrice: '1.5', name: 'Leite', amount: 2 },
     { id: '2', unitPrice: '0.8', name: 'Pão', amount: 1 },
     { id: '3', unitPrice: '0.5', name: 'Ovos', amount: 13 }
   ],
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