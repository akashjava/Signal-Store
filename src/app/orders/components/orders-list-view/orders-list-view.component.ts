import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { OrdersStore } from '../../stores/orders.store';
import { getState } from '@ngrx/signals';

@Component({
  selector: 'orders-list-view',
  standalone: true,
  imports: [],
  templateUrl: './orders-list-view.component.html',
  styleUrl: './orders-list-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersListViewComponent {
  readonly orderStore = inject(OrdersStore);
  constructor() {
    // effect(() => {
    //   // 👇 The effect will be re-executed whenever the state changes.
    //   const state = getState(this.orderStore);
    //   console.log('books state changed', state);
    // });
  }
  ngOnInit(): void {}
}
