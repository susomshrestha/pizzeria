import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app.routing.module';
import { MainModule } from './main/main.module';
import { AdminModule } from './admin/admin.module';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPizzaSlice, faBars, faLeftLong } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [BrowserModule, AppRoutingModule, MainModule, AdminModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FontAwesomeModule]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faPizzaSlice, faBars, faLeftLong);
  }
}
