import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproveComponent } from './addprove.component';

describe('AddproveComponent', () => {
  let component: AddproveComponent;
  let fixture: ComponentFixture<AddproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
