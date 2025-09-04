import { Component } from '@angular/core';

@Component({
  selector: 'app-food-item-carousel',
  templateUrl: './food-item-carousel.component.html',
  styleUrls: ['./food-item-carousel.component.css']
})
export class FoodItemCarouselComponent {
images = ['assets/double-deluxe-shrimp.jpg', 'assets/sushi.jpg', 'assets/clams.jpg'];
currentIndex = 0;
nextIndex = this.currentIndex +1;
nextNextIndex = this.nextIndex +1;
next() {
  this.currentIndex = (this.currentIndex + 1) % this.images.length;
  this.nextIndex = this.currentIndex + 1;
  this.nextNextIndex = this.nextIndex +1;
}
prev() {
  this.currentIndex =
    (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.nextIndex = this.currentIndex - 1;
      this.nextNextIndex = this.nextIndex -1;
}
}
