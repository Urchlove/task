import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent implements OnInit {
@Output()onAddTask: EventEmitter<Task> = new EventEmitter();

title: string;
discription: string;
duedate: string;
showAddTask: boolean;
subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }
  ngOnInit(): void {
    
  }
  onSubmit(){
    if(!this.title){
      alert('please add task');
      return;
    }

    const newTask = {
      title: this.title,
      discription: this.discription,
      duedate: this.duedate
    };

    this.onAddTask.emit(newTask);

    this.title='';
    this.discription='';
    this.duedate= '';

  }
}
