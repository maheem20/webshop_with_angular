import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  cart: Cart = {
    items: [{
      product: 'https://via.placeholder.com/150',
      name: 'sneakers',
      price: 150,
      quantity: 1,
      id: 1
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
