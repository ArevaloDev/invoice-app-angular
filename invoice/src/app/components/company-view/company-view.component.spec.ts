import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyViewComponent } from './company-view.component';

describe('CompanyViewComponent', () => {
  let component: CompanyViewComponent;
  let fixture: ComponentFixture<CompanyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
