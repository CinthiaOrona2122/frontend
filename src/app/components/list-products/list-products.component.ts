import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[] = []

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts() {
    try {
      this._productService.getListProduct().subscribe((data) => {
        this.listProducts = data;
      })

    } catch (error) {
      console.log("Hubo un error" + error);
    }
  }
}
