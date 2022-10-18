import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieSieteComponent } from './serie-siete.component';

describe('SerieSieteComponent', () => {
  let component: SerieSieteComponent;
  let fixture: ComponentFixture<SerieSieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieSieteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerieSieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
