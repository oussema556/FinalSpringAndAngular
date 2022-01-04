import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SercurityFormComponent } from './sercurity-form.component';

describe('SercurityFormComponent', () => {
  let component: SercurityFormComponent;
  let fixture: ComponentFixture<SercurityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SercurityFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SercurityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
