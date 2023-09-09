import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent implements OnInit, OnDestroy {
  @Output() collapseEvent = new EventEmitter<boolean>();

  collapse: boolean = false;

  routerSubscription: Subscription;
  currentRoute: String = '';

  constructor(private router: Router) {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  ngOnInit(): void {}

  toggleCollapse() {
    this.collapse = !this.collapse;
    this.collapseEvent.emit(this.collapse);
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
