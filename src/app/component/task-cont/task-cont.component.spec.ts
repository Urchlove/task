import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskContComponent } from './task-cont.component';

describe('TaskContComponent', () => {
  let component: TaskContComponent;
  let fixture: ComponentFixture<TaskContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskContComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
