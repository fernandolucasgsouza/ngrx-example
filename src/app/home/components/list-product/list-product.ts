import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { IProduct } from '../../../interfaces/product.interface';
import { LoadProducts, RemoveProduct } from '../../../store/product/product.actions';
import { selectIsDeleting, selectIsSaving, selectProducts } from '../../../store/product/product.selectors';

@Component({
    selector: 'app-list-product',
    imports: [AsyncPipe],
    templateUrl: './list-product.html',
    styleUrls: ['./list-product.scss'],
})
export class ListProduct implements OnInit {
    private store = inject(Store);

    public products$: Observable<IProduct[]> = this.store.select(selectProducts);
    public isSaving$: Observable<boolean> = this.store.select(selectIsSaving);
    public isDeleting$: Observable<boolean> = this.store.select(selectIsDeleting);
    
    ngOnInit(): void {
        this.store.dispatch(LoadProducts());
    }

    public deleteProduct(product: IProduct): void {
        this.store.dispatch(RemoveProduct({ payload: product }));
    }
}
