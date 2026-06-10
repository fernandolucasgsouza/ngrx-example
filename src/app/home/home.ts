import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { IProduct } from '../interfaces/product.interface';
import { ListProduct } from './components/list-product/list-product';
import { CreateProduct } from './components/create-product/create-product';
import { select, Store } from '@ngrx/store';
import { selectProducts } from '../store/product.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, CreateProduct, ListProduct],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  public products$: Observable<IProduct[]> = new Observable<IProduct[]>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.products$ = this.store.pipe(select(selectProducts));
  }
}
