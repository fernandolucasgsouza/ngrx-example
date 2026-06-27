import { IProduct } from '../../interfaces/product.interface';

export interface IProductState {
    data: IProduct[];
    isLoading: boolean;
    isSaving: boolean;
    error: any;
}

