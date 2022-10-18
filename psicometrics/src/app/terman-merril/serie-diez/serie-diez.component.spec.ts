import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieDiezComponent } from './serie-diez.component';

describe('SerieDiezComponent', () => {
  let component: SerieDiezComponent;
  let fixture: ComponentFixture<SerieDiezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieDiezComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerieDiezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
