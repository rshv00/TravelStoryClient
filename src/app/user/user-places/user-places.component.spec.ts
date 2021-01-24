import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {UserPlacesComponent} from './user-places.component';

describe('UserPlacesComponent', () => {
  let component: UserPlacesComponent;
  let fixture: ComponentFixture<UserPlacesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserPlacesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
