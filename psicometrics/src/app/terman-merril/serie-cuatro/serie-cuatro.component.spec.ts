import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieCuatroComponent } from './serie-cuatro.component';

describe('SerieCuatroComponent', () => {
  let component: SerieCuatroComponent;
  let fixture: ComponentFixture<SerieCuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieCuatroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerieCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
