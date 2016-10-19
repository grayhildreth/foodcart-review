import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { CartListComponent }   from './cart-list.component';
import { NewCartComponent }   from './new-cart.component';
import { RateCartComponent }   from './rate-cart.component';
import { Cart }   from './cart.model';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],

  declarations: [
    AppComponent,
    CartListComponent,
    NewCartComponent,
    RateCartComponent,
  ],

  bootstrap: [ AppComponent ]
})

export class AppModule { }
