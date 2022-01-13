import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackshapesComponent } from './backshapes.component';

describe('BackshapesComponent', () => {
  let component: BackshapesComponent;
  let fixture: ComponentFixture<BackshapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackshapesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackshapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
