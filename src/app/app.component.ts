import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OrdersListViewComponent } from './orders/components/orders-list-view/orders-list-view.component';
import { OrdersStore } from './orders/stores/orders.store';
import { getState } from '@ngrx/signals';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, OrdersListViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly orderStore = inject(OrdersStore);
  constructor() {}
  ngOnInit(): void {
    this.orderStore.loadByQuery({ filter: {} });
  }
}
