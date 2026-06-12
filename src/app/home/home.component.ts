import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';

import { IProduct } from '../interfaces/product.interface';
import { ListProduct } from './components/list-product/list-product';
import { CreateProduct } from './components/create-product/create-product';
import { select, Store } from '@ngrx/store';
import { selectProducts } from '../store/product.selectors';
import { Observable } from 'rxjs';
import { LoadProducts } from '../store/product.actions';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, CreateProduct, ListProduct],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private store = inject(Store);

  public products$: Observable<IProduct[]> = this.store.select(selectProducts);

  ngOnInit(): void {
    this.store.dispatch(LoadProducts());
  }
}
