import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';
import { FooterComponent } from './footer/footer.component';
import { OrderNowComponent } from './order-now/order-now.component';
import { EclubSignupComponent } from './eclub-signup/eclub-signup.component';
import { FoodItemCarouselComponent } from './food-item-carousel/food-item-carousel.component';
import { AppetizersMenuComponent } from './appetizers-menu/appetizers-menu.component';
import { ShellfishMenuComponent } from './shellfish-menu/shellfish-menu.component';
import { FreshFishMenuComponent } from './fresh-fish-menu/fresh-fish-menu.component';
import { SaladsAndSoupsMenuComponent } from './salads-and-soups-menu/salads-and-soups-menu.component';
import { DonniesFavoritesMenuComponent } from './donnies-favorites-menu/donnies-favorites-menu.component';
import { LunchMenuComponent } from './lunch-menu/lunch-menu.component';
import { KidsMealsMenuComponent } from './kids-meals-menu/kids-meals-menu.component';
import { DessertsMenuComponent } from './desserts-menu/desserts-menu.component';
import { DrinksMenuComponent } from './drinks-menu/drinks-menu.component';
import { SidesMenuComponent } from './sides-menu/sides-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    CareersComponent,
    FooterComponent,
    OrderNowComponent,
    EclubSignupComponent,
    FoodItemCarouselComponent,
    AppetizersMenuComponent,
    ShellfishMenuComponent,
    FreshFishMenuComponent,
    SaladsAndSoupsMenuComponent,
    DonniesFavoritesMenuComponent,
    LunchMenuComponent,
    KidsMealsMenuComponent,
    DessertsMenuComponent,
    DrinksMenuComponent,
    SidesMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
