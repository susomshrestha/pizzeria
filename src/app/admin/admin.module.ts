import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminHeaderComponent } from './shared/components/admin-header/admin-header.component';
import { AdminFooterComponent } from './shared/components/admin-footer/admin-footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { AdminGalleryComponent } from './components/admin-gallery/admin-gallery.component';
import { SettingsComponent } from './components/settings/settings.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminMenuComponent,
    AdminGalleryComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule
  ]
})
export class AdminModule { }
