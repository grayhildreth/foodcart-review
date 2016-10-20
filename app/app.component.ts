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
  public carts: Cart[] = [
    new Cart("Steaks Fifth Ave", "American", 4),
    new Cart("Jarochita", "Mexican", 4),
    new Cart("Don Pedro", "Mexican", 4),
  ];

  selectedCart: Cart = null;
  showDetails(clickedCart: Cart) {
    this.selectedCart = clickedCart;
    console.log("Clicked a btn"); //proves the button works
  }
  finishedEditing() {
    this.selectedCart = null;
  }
}

export class Cart {
  constructor(public name: string, public food_type: string, public ratings: number){
  }
}
