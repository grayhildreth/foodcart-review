import { Component, EventEmitter } from '@angular/core';
import { NewCartComponent } from './new-keg.component';
import { EditCartComponent } from './edit-keg.component';
import { CartComponent } from './keg.component';
import { Cart } from './keg.model';

@Component({
    selector: 'cart-list',
    inputs: ['cartList'],
    outputs: ['onSelectedCart'],
    directives: [CartComponent, NewCartComponent, RateCartComponent],
    template: `
    <cart-item *ngFor="#currentCart of cartList"
      [cart]="currentCart" [ratings]="(currentCart.ratings > 3)" (click)="editCart(currentCart)">
    </cart-item>
    <rate-cart *ngIf="selectedCart" [cart]="selectedCart"></rate-cart>
    <new-cart (onSubmitNewCart) = "createCart($event[0], $event[1], $event[2])"></new-cart>
  `
})
export class CartListComponent {
  public cartList: Cart[];
  public onSelectedCart: EventEmitter<Cart>;
  public selectedCart: Cart;
  constructor() {
    this.onSelectedCart = new EventEmitter();
  }
  editCart(clickedCart: Cart): void {
    this.selectedCart = clickedCart; //assign cart
    this.onSelectedCart.emit(clickedCart); //emit cart
  }
  createCart(name: string, ratings: number, food_type: string, pricyness: string): void {
    this.cartList.push(
      new Cart(name, ratings, food_type, pricyness, this.cartList.length)
    );
  }
}
