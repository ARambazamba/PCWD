import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectLiteralsComponent } from './object-literals.component';

describe('ObjectLiteralsComponent', () => {
  let component: ObjectLiteralsComponent;
  let fixture: ComponentFixture<ObjectLiteralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectLiteralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectLiteralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
