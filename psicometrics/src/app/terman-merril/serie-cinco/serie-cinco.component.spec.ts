import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieCincoComponent } from './serie-cinco.component';

describe('SerieCincoComponent', () => {
  let component: SerieCincoComponent;
  let fixture: ComponentFixture<SerieCincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieCincoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerieCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
