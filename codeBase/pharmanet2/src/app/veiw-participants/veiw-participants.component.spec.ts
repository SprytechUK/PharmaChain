import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwParticipantsComponent } from './veiw-participants.component';

describe('VeiwParticipantsComponent', () => {
  let component: VeiwParticipantsComponent;
  let fixture: ComponentFixture<VeiwParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiwParticipantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiwParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
