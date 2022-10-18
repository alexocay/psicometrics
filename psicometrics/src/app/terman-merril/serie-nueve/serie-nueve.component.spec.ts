import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieNueveComponent } from './serie-nueve.component';

describe('SerieNueveComponent', () => {
  let component: SerieNueveComponent;
  let fixture: ComponentFixture<SerieNueveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieNueveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerieNueveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
