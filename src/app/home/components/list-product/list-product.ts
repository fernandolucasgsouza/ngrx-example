import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { LoadProducts } from '../../../store/product.actions';
import { IProduct } from '../../../interfaces/product.interface';
import { selectProducts } from '../../../store/product.selectors';

@Component({
  selector: 'app-list-product',
  imports: [AsyncPipe],
  templateUrl: './list-product.html',
  styleUrls: ['./list-product.scss'],
})
export class ListProduct implements OnInit {
   private store = inject(Store);

  public products$: Observable<IProduct[]> = this.store.select(selectProducts);
  
  ngOnInit(): void {
    this.store.dispatch(LoadProducts());
  }

  public deleteProduct(id: string): void {
    console.log(`Produto com id ${id} excluído!`);
  }
}
