import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Food Cart Reviews</h1>
    <cart-list></cart-list>
  </div>
  `
})
export class AppComponent {
  
}

export class Cart {
  constructor(public name: string, public food_type: string, public ratings: number){
  }
}
