import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cart }   from './cart.model';

@Component({
    selector: 'rate-cart',
    template: `
    <div *ngIf="childSelectedCart">
      <h1>Rate this Cart</h1>
      <select [(ngModel)]="childSelectedCart.ratings">
        <option value="5">Legendary</option>
        <option value="4">Great</option>
        <option value="3" selected="selected">Good</option>
        <option value="2">So-so</option>
        <option value="1">Poor</option>
      </select>
      <button (click)="rateCart()">Rate It!</button>
    </div>
  `
})
export class RateCartComponent {
  @Input() childSelectedCart: Cart;
  @Output() rateCartSender = new EventEmitter();
  rateCart() {
    this.rateCartSender.emit();
  }
}
