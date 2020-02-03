import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../core/services/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyValidators } from '../../../utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  formgroup: FormGroup;
  id: string;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id).subscribe((product) => {
        this.formgroup.patchValue(product);
      });
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    console.log(this.formgroup.value);
    if (this.formgroup.valid) {
      const product = this.formgroup.value;
      this.productsService.updateProduct(this.id, product).subscribe((newProduct) => {
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
