import { Component, OnInit,Input , Output, EventEmitter} from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-cont',
  templateUrl: './task-cont.component.html',
  styleUrl: './task-cont.component.css'
})
export class TaskContComponent implements OnInit {
@Input() task: Task;
@Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()


faTimes = faTimes;

  constructor(){

  }

  ngOnInit(): void {
    
  }

  onDelete(task: any){
    this.onDeleteTask.emit(task);
  }

}
