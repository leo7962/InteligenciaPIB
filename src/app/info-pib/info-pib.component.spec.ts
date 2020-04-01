import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPibComponent } from './info-pib.component';

describe('InfoPibComponent', () => {
  let component: InfoPibComponent;
  let fixture: ComponentFixture<InfoPibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
