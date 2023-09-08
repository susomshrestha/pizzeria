import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent {
  @Output() collapseEvent = new EventEmitter<boolean>();

  collapse: boolean = false;

  constructor(private router: Router) {
    console.log(router.url)
  }

  toggleCollapse() {
    this.collapse = !this.collapse;
    this.collapseEvent.emit(this.collapse);
  }
}
