import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHackerComponent } from './edit-hacker.component';

describe('EditHackerComponent', () => {
  let component: EditHackerComponent;
  let fixture: ComponentFixture<EditHackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
