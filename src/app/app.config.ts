import { provideRouter } from '@angular/router';
import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { productReducer } from './store/product.reducer';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import * as fromProductEffects from './store/product.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({
      products: productReducer,
    }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      connectInZone: true,
    }),
    provideEffects([fromProductEffects]),
  ],
};
