import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../../interfaces/product.interface';
import { Store } from '@ngrx/store';
import { LoadProducts } from '../../../store/product.actions';

@Component({
  selector: 'app-list-product',
  imports: [],
  templateUrl: './list-product.html',
  styleUrl: './list-product.scss',
})
export class ListProduct implements OnInit {
  @Input() products: IProduct[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
  }

  public deleteProduct(id: string): void {
    console.log(`Produto com id ${id} excluído!`);
  }
}
