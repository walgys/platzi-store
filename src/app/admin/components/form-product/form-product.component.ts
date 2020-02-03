import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../core/services/products.service';
import { Router } from '@angular/router';
import { MyValidators } from '../../../utils/validators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  formgroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  saveProduct(event: Event) {
    event.preventDefault();
    console.log(this.formgroup.value);
    if (this.formgroup.valid) {
      const product = this.formgroup.value;
      this.productsService.createProduct(product).subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  private buildForm() {
    this.formgroup = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }

  get priceField() {
    return this.formgroup.get('price');
  }
}
