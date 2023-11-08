import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanceltransactionComponent } from './canceltransaction.component';

describe('CanceltransactionComponent', () => {
  let component: CanceltransactionComponent;
  let fixture: ComponentFixture<CanceltransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanceltransactionComponent]
    });
    fixture = TestBed.createComponent(CanceltransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
