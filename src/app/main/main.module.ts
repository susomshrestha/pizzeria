import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, AboutComponent, GalleryComponent, MenuComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FontAwesomeModule,
    SlickCarouselModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class MainModule {}
