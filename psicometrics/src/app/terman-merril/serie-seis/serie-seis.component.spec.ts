import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieSeisComponent } from './serie-seis.component';

describe('SerieSeisComponent', () => {
  let component: SerieSeisComponent;
  let fixture: ComponentFixture<SerieSeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieSeisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerieSeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
