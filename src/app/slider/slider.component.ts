import {Component, OnInit, Input, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() imageUrls: string[];
  @Input() slidingTime: number = 5000;
  timeout = 0;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.showSlide(0, null);
  }

  changeSlide(newIndex) {
    this.showSlide(newIndex, null);
  }

  showSlide(newIndex, oldIndex) {
    const sliders: any = document.querySelectorAll('.radio-btn');
    if (newIndex > sliders.length - 1) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = sliders.length - 1;
    }

    // hide element
    if (oldIndex > 0) {
      sliders[oldIndex].checked = false;
    }

    // show element
    sliders[newIndex].checked = true;

    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.showSlide(newIndex + 1, newIndex), this.slidingTime);
  }

}
