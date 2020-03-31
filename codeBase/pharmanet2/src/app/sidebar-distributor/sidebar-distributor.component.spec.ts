import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDistributorComponent } from './sidebar-distributor.component';

describe('SidebarDistributorComponent', () => {
  let component: SidebarDistributorComponent;
  let fixture: ComponentFixture<SidebarDistributorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarDistributorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
