import { Component, Output, EventEmitter } from '@angular/core';
import { Cart }   from './cart.model';


@Component({
    selector: 'new-cart',
    template: `
    <h1>New Food Cart</h1>
    <div>
      <label>New Cart name: </label>
      <input #newName>
    </div>
    <div>
      <label>New Cart food type: </label>
      <input #newFoodType>
    </div>
    <div>
      <label>New Cart star rating: </label>
      <input #newRatings>
    </div>
    <div>
      <label>New Cart pricyness (5 highest): </label>
      <input #newPricyness>
    </div>
    <div>
      <button (click)="
        addClicked(newName.value, newFoodType.value, newRatings.value, newPricyness.value);
        newName.value='';
        newFoodType.value='';
        newRatings.value='';
        newPricyness.value='';
      ">Add</button>
    </div>
  `
})
export class NewCartComponent {
  @Output() newCartSender = new EventEmitter();
  addClicked(name: string, food_type: string, ratings: number, pricyness: string, id: number) {
    var newCartToAdd: Cart = new Cart(name, food_type, ratings, pricyness, id);
    this.newCartSender.emit(newCartToAdd);
  }
}
