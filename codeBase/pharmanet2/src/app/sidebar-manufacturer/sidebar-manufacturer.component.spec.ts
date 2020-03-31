import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarManufacturerComponent } from './sidebar-manufacturer.component';

describe('SidebarManufacturerComponent', () => {
  let component: SidebarManufacturerComponent;
  let fixture: ComponentFixture<SidebarManufacturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarManufacturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
