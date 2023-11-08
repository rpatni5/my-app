import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesstransactionComponent } from './successtransaction.component';

describe('SuccesstransactionComponent', () => {
  let component: SuccesstransactionComponent;
  let fixture: ComponentFixture<SuccesstransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccesstransactionComponent]
    });
    fixture = TestBed.createComponent(SuccesstransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
