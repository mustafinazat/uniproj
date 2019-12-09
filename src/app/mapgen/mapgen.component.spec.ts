import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapgenComponent } from './mapgen.component';

describe('MapgenComponent', () => {
  let component: MapgenComponent;
  let fixture: ComponentFixture<MapgenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapgenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
