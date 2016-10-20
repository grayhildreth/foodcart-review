import { Component } from '@angular/core';
import { Cart } from './cart.model';

@Component({
  selector: 'cart-item',
  template: `
    <div>
      <span *ngIf="cart.ratings > 3" class="good">
        <h3>{{cart.name}} -- <small>{{cart.food_type}}</small></h3> <h4>{{cart.ratings}}-stars, {{cart.pricyness}}</h4>
      </span>
      <span *ngIf="cart.ratings <= 3" class="soso">
        <h3>{{cart.name}} -- <small>{{cart.food_type}}</small></h3> <h4>{{cart.ratings}}-stars, {{cart.pricyness}}</h4>
      </span>
      <button (click)="rateCart(cart)">Rate Cart</button>
    </div>
  `
})
export class CartComponent {
  public cart: Cart;
  rateCart(cart: Cart) {
    cart.ratings --;
  }
}
