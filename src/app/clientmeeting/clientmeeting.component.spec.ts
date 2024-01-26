import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientmeetingComponent } from './clientmeeting.component';


describe('ClientmeetingComponent', () => {
  let component: ClientmeetingComponent;
  let fixture: ComponentFixture<ClientmeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientmeetingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientmeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
