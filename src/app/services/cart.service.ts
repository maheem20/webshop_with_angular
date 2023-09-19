import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({ items: [] });

  constructor(private _snackbar: MatSnackBar) { }

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];
    const itemInCart = items.find((_item) => _item.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }
    this.cart.next({ items });
    this._snackbar.open('1 item added to cart', 'Ok', { duration: 3000 });
  }

  removeQuantity(item: CartItem): void {
    let itemForRemoval: CartItem | undefined;

    let filteredItems = this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;
        if (_item.quantity === 0) {
          itemForRemoval = _item;
        }
      }
      return _item;
    });
  }

  getTotal(items: Array<CartItem>): number {
    return items
      .map((item) => item.quantity * item.price)
      .reduce((prev, current) => prev + current, 0);
  }

  clearCart(): void {
    this.cart.next({ items: [] });
    this._snackbar.open('Cart cleared', 'Ok', { duration: 3000 });
  }

  removeFromCart(item: CartItem): void {
    const filteredItems = this.cart.value.items.filter((_item) => _item.id !== item.id);
    this.cart.next({ items: filteredItems });
    this._snackbar.open('1 item removed from cart', 'Ok', { duration: 3000 });
  }
}
