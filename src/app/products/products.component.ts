import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

}
