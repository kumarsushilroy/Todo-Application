import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTodoComponent } from './second-todo.component';

describe('SecondTodoComponent', () => {
  let component: SecondTodoComponent;
  let fixture: ComponentFixture<SecondTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
