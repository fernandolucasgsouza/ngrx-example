import { Component } from '@angular/core';

import { IProduct } from '../interfaces/product.interface';
import { ListProduct } from "./components/list-product/list-product";
import { CreateProduct } from './components/create-product/create-product';

@Component({
  selector: 'app-home',
  imports: [CreateProduct, ListProduct],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  public products: IProduct[] = [
    { id: '1', unitPrice: '1.5', name: 'Leite', amount: 2 },
    { id: '2', unitPrice: '0.8', name: 'Pão', amount: 1 },
    { id: '3', unitPrice: '0.2', name: 'Ovos', amount: 12 }
  ];
  
}
