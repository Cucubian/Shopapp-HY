import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OderConfirm } from './oder-confirm';

describe('OderConfirm', () => {
  let component: OderConfirm;
  let fixture: ComponentFixture<OderConfirm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OderConfirm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OderConfirm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
