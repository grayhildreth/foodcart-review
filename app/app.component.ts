import { Component } from '@angular/core';
import { Cart } from './cart.model';

@Component({
    selector: 'my-app',
    directives: [CartListComponent],
    template: `
    <div class="container">
      <h3>Cart List</h3>
      <cart-list></cart-list>
    </div>
  `
})
export class AppComponent {
  public carts: Cart[];
  constructor(){
    this.carts = [
      new Cart("Steaks Fifth Avenue",4,"East Coast","medium"),
      new Cart("Jarochita",4,"Mexican","low"),
      new Cart("Koi Fusion",4,"Fusion Asian","medium")
    ];
  }
}
