import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { OrderNowComponent } from './order-now/order-now.component';
import { AppetizersMenuComponent } from './appetizers-menu/appetizers-menu.component';
import { ShellfishMenuComponent } from './shellfish-menu/shellfish-menu.component';
import { FreshFishMenuComponent } from './fresh-fish-menu/fresh-fish-menu.component';
import { LunchMenuComponent } from './lunch-menu/lunch-menu.component';
import { DonniesFavoritesMenuComponent } from './donnies-favorites-menu/donnies-favorites-menu.component';
import { KidsMealsMenuComponent } from './kids-meals-menu/kids-meals-menu.component';
import { DrinksMenuComponent } from './drinks-menu/drinks-menu.component';
import { SaladsAndSoupsMenuComponent } from './salads-and-soups-menu/salads-and-soups-menu.component';
import { SidesMenuComponent } from './sides-menu/sides-menu.component';
import { DessertsMenuComponent } from './desserts-menu/desserts-menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'menu', component: MenuComponent, children: [
      { path: 'menu/appetizers', component: AppetizersMenuComponent },
      { path: 'menu/shellfish', component: ShellfishMenuComponent },
      { path: 'menu/fresh-fish', component: FreshFishMenuComponent },
      { path: 'menu/donnies-favorites', component: DonniesFavoritesMenuComponent },
      { path: 'menu/lunch', component: LunchMenuComponent },
      { path: 'menu/salads-and-soups', component: SaladsAndSoupsMenuComponent },
      { path: 'menu/sides', component: SidesMenuComponent },
      { path: 'menu/kids', component: KidsMealsMenuComponent },
      { path: 'menu/desserts', component: DessertsMenuComponent },
      { path: 'menu/drinks', component: DrinksMenuComponent }
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'order', component: OrderNowComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
