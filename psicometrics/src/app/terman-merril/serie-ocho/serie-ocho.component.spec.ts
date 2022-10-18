import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieOchoComponent } from './serie-ocho.component';

describe('SerieOchoComponent', () => {
  let component: SerieOchoComponent;
  let fixture: ComponentFixture<SerieOchoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieOchoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerieOchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
