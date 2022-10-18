import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieDosComponent } from './serie-dos.component';

describe('SerieDosComponent', () => {
  let component: SerieDosComponent;
  let fixture: ComponentFixture<SerieDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerieDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
