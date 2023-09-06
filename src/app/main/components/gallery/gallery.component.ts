import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images = [
    'pizzasvg.svg',
    'pizza-one.jpeg',
    'pizza-one.jpeg',
    'pizza-one.jpeg',
    'pizza-one.jpeg',
    'pizzasvg.svg',
    'pizza-one.jpeg',
    'pizza-one.jpeg',
    'pizza-one.jpeg',
  ]
}
