import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestHomeComponent } from './labtest-home.component';

describe('LabtestHomeComponent', () => {
  let component: LabtestHomeComponent;
  let fixture: ComponentFixture<LabtestHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabtestHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabtestHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
