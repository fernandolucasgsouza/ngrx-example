import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { IProduct, IProductBase } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products: IProduct[] = [
    { id: 1, unitPrice: '1.5', name: 'Leite', amount: 2 },
    { id: 2, unitPrice: '0.8', name: 'Pão', amount: 1 },
    { id: 3, unitPrice: '0.5', name: 'Ovos', amount: 12 }
  ];

  public getProducts(): Observable<IProduct[]> {
    return of(this.products);
  }

  public addProduct(product: IProductBase): Observable<number> {
   const id = this.products.length + 1;
   this.products = [...this.products, { ...product, id }];
    return of(id);
  }

  public RemoveProduct(product:IProduct): Observable<number> {
    const idCurrentProduct = product.id;
    this.products = this.products.filter(p => p.id !== idCurrentProduct);
    return of(idCurrentProduct);
  }
}
