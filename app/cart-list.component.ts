import { Component, EventEmitter } from '@angular/core';
// import { NewCartComponent } from './new-cart.component';
import { RateCartComponent } from './rate-cart.component';
// import { CartComponent } from './cart.component';
import { Cart } from './cart.model';

@Component({
    selector: 'cart-list',
    inputs: ['cartList'],
    outputs: ['onSelectedCart'],
    template: `
    <div *ngFor="let currentCart of carts">
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

    <!-- <cart-item *ngFor="#currentCart of cartList"
      [cart]="currentCart" [ratings]="(currentCart.ratings > 3)" (click)="editCart(currentCart)">
    </cart-item>
    <rate-cart *ngIf="selectedCart" [cart]="selectedCart"></rate-cart>
    <new-cart (onSubmitNewCart) = "createCart($event[0], $event[1], $event[2])"></new-cart> -->
  `
})
export class CartListComponent {
  // public carts: Cart[] = [
  //   new Cart("Steaks Fifth Ave", "American", 4, 3),
  //   new Cart("Jarochita", "Mexican", 4, 3),
  //   new Cart("Don Pedro", "Mexican", 4, 3),
  // ];

  showDetails(clickedCart: Cart) {
    this.selectedCart = clickedCart;
    console.log("Clicked a btn"); //proves the button works
  }
  finishedEditing() {
    this.selectedCart = null;
  }
  public cartList: Cart[];
  public onSelectedCart: EventEmitter<Cart>;
  public selectedCart: Cart = null;
  constructor() {
    this.onSelectedCart = new EventEmitter();
  }
  editCart(clickedCart: Cart): void {
    this.selectedCart = clickedCart; //assign cart
    this.onSelectedCart.emit(clickedCart); //emit cart
  }
  createCart(name: string, ratings: number, food_type: string, pricyness: string, id: number): void {
    this.cartList.push(
      new Cart(name, ratings, food_type, pricyness, this.cartList.length)
    );
  }
}
