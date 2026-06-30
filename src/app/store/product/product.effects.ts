import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { ProductService } from '../../services/product/product.service';
import {
    AddProduct,
    AddProductError,
    AddProductSuccess,
    LoadProducts,
    LoadProductsError,
    LoadProductsSuccess,
    RemoveProduct,
    RemoveProductError,
    RemoveProductSuccess,
} from './product.actions';

export const LoadProductsEffect = createEffect(
    (actions$ = inject(Actions), service = inject(ProductService)) =>
        actions$.pipe(
            ofType(LoadProducts),
            switchMap(() =>
                service.getProducts().pipe(
                    map((products) => LoadProductsSuccess({ payload: products })),
                    catchError((error) => of(LoadProductsError({ error }))),
                ),
            ),
        ),
    { functional: true },
);

export const AddProductEffect = createEffect(
    (actions$ = inject(Actions), service = inject(ProductService)) =>
        actions$.pipe(
            ofType(AddProduct),
            mergeMap(({payload}) =>
                service.addProduct(payload).pipe(
                    map((id) => AddProductSuccess({ payload: { ...payload, id } })),
                    catchError((error) => of(AddProductError({ error }))),
                ),
            ),
        ),
    { functional: true },
);

export const RemoveProductEffect = createEffect(
    (actions$ = inject(Actions), service = inject(ProductService)) =>
        actions$.pipe(
            ofType(RemoveProduct),
            mergeMap(({payload}) =>
                service.RemoveProduct(payload).pipe(
                    map(() => RemoveProductSuccess({ payload })),
                    catchError((error) => of(RemoveProductError({ payload, error }))),
                ),
            ),
        ),
    { functional: true },
);
