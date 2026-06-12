import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, of, switchMap } from 'rxjs';
import { ProductService } from '../services/product/product.service';
import { LoadProducts, LoadProductsError, LoadProductsSuccess } from './product.actions';

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
