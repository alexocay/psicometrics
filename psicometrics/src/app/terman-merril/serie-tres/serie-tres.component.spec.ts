import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieTresComponent } from './serie-tres.component';

describe('SerieTresComponent', () => {
  let component: SerieTresComponent;
  let fixture: ComponentFixture<SerieTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieTresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerieTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
