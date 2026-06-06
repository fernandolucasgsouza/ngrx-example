import { Component } from '@angular/core';
import { ShoppingList } from "./components/shopping-list/shopping-list";

@Component({
  selector: 'app-home',
  imports: [ShoppingList],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
