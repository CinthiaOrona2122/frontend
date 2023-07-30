import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-edit-products',
  templateUrl: './add-edit-products.component.html',
  styleUrls: ['./add-edit-products.component.css']
})
export class AddEditProductsComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';


  constructor(
    private fb: FormBuilder,
    private _productService: ProductService,
    private toastr: ToastrService,
    private router: Router,
    private aRouter: ActivatedRoute
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required],
    });
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
    console.log(this.id);
  }

  ngOnInit(): void {
    if (this.id != 0) {
      //Es editar
      this.operacion = 'Editar ';
      this.getProduct(this.id);
    }
  }

  addProduct() {
    const product: Product = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      stock: this.form.value.stock
    }
    this.loading = true;

    if (this.id !== 0) {
      //Es editar
      product.id = this.id;
      try {
        this._productService.updateProduct(this.id, product).subscribe(() => {
          this.toastr.info('Producto actualizado correctamente', 'Actualizar Producto')
        })
      } catch (error) {
        console.log(error);
      }
    } else {
      //Es agregar
      try {
        this._productService.saveProduct(product).subscribe(() => {
          this.toastr.success('Producto creado correctamente', 'Guardar Producto')
        })
      } catch (error) {
        console.log(error);
      }}
      
      this.loading = false;
      this.router.navigate(['/'])
  }

  getProduct(id: number) {
    this.loading = true;
    try {
      this._productService.getProductById(id).subscribe((product: Product) => {
        this.loading = false;
        this.form.setValue({
          name: product.name,
          description: product.description,
          price: product.price,
          stock: product.stock
        });
      })
    } catch (error) {
      console.log(error);
    }

  }


}