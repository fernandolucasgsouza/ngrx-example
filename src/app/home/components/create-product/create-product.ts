import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddProduct } from '../../../store/product/product.actions';

@Component({
    selector: 'app-create-product',
    imports: [ReactiveFormsModule],
    templateUrl: './create-product.html',
    styleUrls: ['./create-product.scss'],
})
export class CreateProduct {
    public form: FormGroup;

    constructor(
        private store: Store,
        private fb: FormBuilder,
    ) {
        this.form = this.fb.group({
            name: ['', Validators.required],
            amount: ['', Validators.required],
        });
    }

    public createProduct(): void {
        if (this.form.invalid) {
            return;
        }
        this.store.dispatch(AddProduct({ payload: this.form.value }));
        this.form.reset();
    }
}
