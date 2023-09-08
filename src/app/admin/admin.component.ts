import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  collapse: Boolean = false;

  toggleCollapse(event: boolean) {
    this.collapse = event;
  }
}
