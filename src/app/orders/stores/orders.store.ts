import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { initialState } from './orders.state';
import { computed, inject } from '@angular/core';
import { OrderServiceService } from '../services/order-service.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';

export const OrdersStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ orders }) => ({
    ordersCount: computed(() => orders().length),
  })),
  withMethods((store, ordersService = inject(OrderServiceService)) => ({
    loadByQuery: rxMethod<any>(
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => patchState(store, { isLoading: true })),
        switchMap((query) => {
          return ordersService.getOrders(query).pipe(
            tapResponse({
              next: (orders) => patchState(store, { orders }),
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            })
          );
        })
      )
    ),
  }))
);
