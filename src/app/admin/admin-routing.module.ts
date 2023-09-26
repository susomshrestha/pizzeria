import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminGalleryComponent } from './components/admin-gallery/admin-gallery.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CategoryComponent } from './components/category/category.component';
import { ItemComponent } from './components/item/item.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'admin/home', component: AdminHomeComponent },
      { path: 'admin/gallery', component: AdminGalleryComponent },
      {
        path: 'admin/menu',
        component: AdminMenuComponent,
        children: [
          {
            path: '',
            redirectTo: 'category',
            pathMatch: 'full',
          },
          {
            path: 'category',
            component: CategoryComponent,
          },
          {
            path: 'item',
            component: ItemComponent,
          },
        ],
      },
      { path: 'admin/setting', component: SettingsComponent },
      // { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect / to /home
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
