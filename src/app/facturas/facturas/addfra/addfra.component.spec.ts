import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfraComponent } from './addfra.component';

describe('AddfraComponent', () => {
  let component: AddfraComponent;
  let fixture: ComponentFixture<AddfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
