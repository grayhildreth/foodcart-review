import { Component, Output, EventEmitter } from '@angular/core';
import { Cart } from '@angular/core';


@Component({
    selector: 'new-cart',
    template: `
    <div>Skeleton template with...</div>
  `
})
export class NewCartComponent {
  public onSubmitNewCart: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewCart =  new EventEmitter()
  }
  addCart(name: HTMLInputElement, ratings: HTMLInputElement, food_type: HTMLInputElement, pricyness: HTMLInputElement){
    this.onSubmitNewCart.emit([name.value, ratings.value, food_type.value, pricyness.value]);
    name.value="";
    ratings.value="";
    food_type.value="";
    pricyness.value="";
  }
}
