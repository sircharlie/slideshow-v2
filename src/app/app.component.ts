import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'slideshow-v2';
  slidingTime = 5000;
  imageUrls: string[] = [
    'https://unsplash.it/800/600?random',
    'https://unsplash.it/1200/600?random',
    'https://unsplash.it/400/800?random'];

  randomNum(maxN) {
    return Math.floor(Math.random() * maxN);
  }

  add() {
    this.imageUrls.push(
        `https://unsplash.it/${this.randomNum(800)}/${this.randomNum(
            300)}?random`);
  }

  remove() {
    this.imageUrls.pop();
  }

  increase() {
    this.slidingTime += 1000;
  }

  decrease() {
    if (this.slidingTime == 1000) {
      return;
    }
    this.slidingTime -= 1000;
  }

}
