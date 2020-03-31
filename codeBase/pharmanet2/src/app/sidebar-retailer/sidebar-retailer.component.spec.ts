import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarRetailerComponent } from './sidebar-retailer.component';

describe('SidebarRetailerComponent', () => {
  let component: SidebarRetailerComponent;
  let fixture: ComponentFixture<SidebarRetailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarRetailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
