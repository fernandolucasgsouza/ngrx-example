import { Component, Input } from '@angular/core';
import { IProduct } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-list-product',
  imports: [],
  templateUrl: './list-product.html',
  styleUrl: './list-product.scss',
})
export class ListProduct {

  @Input() products: IProduct[] = [];

  public deleteProduct(id: string): void {
    console.log(`Produto com id ${id} excluído!`);
  }
  
}
