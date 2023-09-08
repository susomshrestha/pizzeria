import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    MainComponent,
    AboutComponent,
    FooterComponent,
    GalleryComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [CommonModule, MainRoutingModule, FontAwesomeModule, SlickCarouselModule],
})
export class MainModule {}
