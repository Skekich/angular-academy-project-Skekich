import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationContainerComponent } from './user-registration-container.component';

describe('UserRegistrationContainerComponent', () => {
  let component: UserRegistrationContainerComponent;
  let fixture: ComponentFixture<UserRegistrationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistrationContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
