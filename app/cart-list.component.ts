import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NewCartComponent } from './new-cart.component';
import { RateCartComponent } from './rate-cart.component';
import { CartComponent } from './cart.component';
import { Cart } from './cart.model';

@Component({
    selector: 'cart-list',
    template: `
    <div *ngFor="let currentCart of childCartList">
      
      <h3>{{ currentCart.name }}</h3>
      <h4 class="foodType">{{ currentCart.food_type }}</h4>
      <h4 class="starRating">{{ currentCart.ratings }}</h4>
      <button (click)="showDetails(currentCart)">Edit</button>
    </div>
    <div *ngIf="selectedCart">
      <h1>Edit Cart</h1>
      <div>
        <label>Enter Cart Name:</label>
        <input [(ngModel)]="selectedCart.name">
      </div>
      <div>
        <label>Enter Cart Rating:</label>
        <input [(ngModel)]="selectedCart.ratings">
        <button (click)="finishedEditing()">Done</button>
      </div>
    </div>
  `
})
export class CartListComponent {
  @Input() childCartList: Cart[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(cartToEdit: Cart) {
  this.clickSender.emit(cartToEdit);
  }
}
