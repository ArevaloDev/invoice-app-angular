import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowItemsViewComponent } from './row-items-view.component';

describe('RowItemsViewComponent', () => {
  let component: RowItemsViewComponent;
  let fixture: ComponentFixture<RowItemsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RowItemsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowItemsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
