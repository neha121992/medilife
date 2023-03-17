import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDealHeaderComponent } from './top-deal-header.component';

describe('TopDealHeaderComponent', () => {
  let component: TopDealHeaderComponent;
  let fixture: ComponentFixture<TopDealHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDealHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopDealHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
