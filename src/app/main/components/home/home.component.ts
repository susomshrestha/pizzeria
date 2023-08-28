import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  categories = [
    {
      icon: 'pizza-slice',
      title: 'Pizza'
    },
    {
      icon: 'pizza-slice',
      title: 'Sandwich'
    },
    {
      icon: 'pizza-slice',
      title: 'Chicken'
    },
    {
      icon: 'pizza-slice',
      title: 'Fries'
    },
    {
      icon: 'pizza-slice',
      title: 'Salad'
    },
  ];
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="arrow left">⬅</div>',
    nextArrow: '<div class="arrow right">⮕</div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
}
