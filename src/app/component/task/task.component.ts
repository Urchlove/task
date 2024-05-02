import { Component, OnInit, Input, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent  implements OnInit{

  tasks: Task[] = [];
  constructor(private taskservice: TaskService){

  }
  ngOnInit(): void {
    this.taskservice.getTask().subscribe((tasks)=>(this.tasks = tasks));
  }

  deleteTask(task:Task) {
    this.taskservice.deleteTask(task).subscribe(() =>(this.tasks = this.tasks.filter((t) => t.id !== task.id)));
  }

  addTask(task: Task){
    this.taskservice.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }

}
