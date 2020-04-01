import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  Images = ['../assets/images/bg-1.jpg', '../assets/images/bg-2.jpg'];

  SlideOptions = { items: 1, dots: true };
  CarouselOptions = { items: 2, dots: true };

  constructor() { }

  ngOnInit(): void {
  }

}
