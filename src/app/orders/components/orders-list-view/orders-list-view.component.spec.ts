import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersListViewComponent } from './orders-list-view.component';

describe('OrdersListViewComponent', () => {
  let component: OrdersListViewComponent;
  let fixture: ComponentFixture<OrdersListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersListViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdersListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
