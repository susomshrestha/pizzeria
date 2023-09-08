import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { MainModule } from './main/main.module';
import { AdminModule } from './admin/admin.module';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faPizzaSlice,
  faBars,
  faLeftLong,
  faBorderNone,
  faImages,
  faGear,
  faUtensils,
  faUser,
  faCircleArrowLeft,
  faCircleArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SlickCarouselModule, MainModule, AdminModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FontAwesomeModule],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faPizzaSlice,
      faBars,
      faLeftLong,
      faBorderNone,
      faImages,
      faGear,
      faSquare,
      faUtensils,
      faUser,
      faCircleArrowLeft,
      faCircleArrowRight
    );
  }
}
