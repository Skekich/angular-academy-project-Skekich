import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginContainerComponent } from './user-login-container.component';

describe('UserLoginContainerComponent', () => {
  let component: UserLoginContainerComponent;
  let fixture: ComponentFixture<UserLoginContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
