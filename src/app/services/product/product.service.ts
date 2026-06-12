import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { IProduct } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products: IProduct[] = [
    { id: '1', unitPrice: '1.5', name: 'Leite', amount: 2 },
    { id: '2', unitPrice: '0.8', name: 'Pão', amount: 1 },
    { id: '3', unitPrice: '0.5', name: 'Ovos', amount: 13 }
  ];

  public getProducts(): Observable<IProduct[]> {
    return of(this.products);
  }
}
