import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent implements OnInit {
  [x: string]: any;
  @Input() fullWidthMode = false;

  product: Product = {
    id: 1,
    title: 'Snearkers',
    price: 150,
    category: 'Shoes',
    description: 'Description',
    image: 'https://via.placeholder.com/150'
  };

  constructor() { }

  ngOnInit(): void { }

  onAddToCart(): void { }

}
