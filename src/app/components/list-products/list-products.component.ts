import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  listProducts: Product[] = [
    { id: 1, name: "Sillón gabardina", description: "Sillón de gabardina de tres cuerpos", price: 100.000, stock: 10 },
    { id: 2, name: "Sillón de madera", description: "Sillón de madera de tres cuerpos", price: 100.000, stock: 20 },
  ]
}
