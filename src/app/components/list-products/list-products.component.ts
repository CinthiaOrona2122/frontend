import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[] = []
  loading: boolean = false;

  constructor(private _productService: ProductService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts() {
    this.loading = true;
    try {
      this._productService.getListProduct().subscribe((data: Product[]) => {
        this.listProducts = data;
        this.loading = false;
      })
    } catch (error) {
      console.log("Hubo un error" + error);
    }
  }

  getProductById(id: number) {
    this.loading = true;
    try {
      this._productService.getProductById(id).subscribe((data: Product) => {
        this.loading = false;
        this.listProducts = [data];
      })
    } catch (error) {
      console.log("Hubo un error" + error);
    }
  }

  deleteProduct(id: number) {
    this.loading = true;
    this._productService.deleteProduct(id).subscribe(() => {
      this.getListProducts();
      this.toastr.error('Producto eliminado correctamente', 'Producto Eliminado')
    });
  }
}
