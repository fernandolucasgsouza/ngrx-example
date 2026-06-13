import { ChangeDetectionStrategy, Component} from '@angular/core';

import { ListProduct } from './components/list-product/list-product';
import { CreateProduct } from './components/create-product/create-product';

@Component({
  selector: 'app-home',
  imports: [CreateProduct, ListProduct],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
}
