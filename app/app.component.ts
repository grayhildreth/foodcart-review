import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Food Cart Reviews</h1>
    <div > <!-- *ngFor "let currentCart of carts"> -->
      <h3>{{ foodCart.name }}</h3>
      <!-- <button (click)="showDetails(currentCart)">Edit</button>
    </div>
    <div *ngIf="selectedCart">
      <h1>Edit Cart</h1>
      <div>
        <label>Enter Cart Name:</label>
        <input [(ngModel)]="selectedCart.name">
      </div>
      <div>
        <label>Enter Cart Rating:</label>
        <input [(ngModel)]="selectedCart.id">
        <button (click)="finishedEditing()">Done</button>
      </div> -->
    </div>
  </div>
  `
})
export class AppComponent {
  foodCart: Cart = new Cart("Steaks Fifth Ave", "American", 1995);
}

export class Cart {
  constructor(public name: string, public food_type: string, public year: number){
  }
}
