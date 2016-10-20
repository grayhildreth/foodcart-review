import { Component } from '@angular/core';
// import { Cart } from '@angular/core';


@Component({
    selector: 'rate-cart',
    inputs: ['cart'],
    template: `
    <div class="form-group">
      <h2>Rate a food cart...</h2>
      <input [(ngModel)]="cart.name" class="input-lg form-control"/>
      <input [(ngModel)]="cart.ratings" class="input-lg form-control"/>
      <input [(ngModel)]="cart.food_type" class="input-lg form-control"/>
      <input [(ngModel)]="cart.pricyness" class="input-lg form-control"/>
    </div>
  `
})
export class RateCartComponent {
  public cart: Cart;
}
