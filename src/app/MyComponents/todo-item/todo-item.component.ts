import { Component ,Input,Output,EventEmitter } from '@angular/core';
import {Todo} from '../../Todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [
    [CommonModule]
  ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter(); 
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter(); 
  onDeleteClick(todo:Todo){
    console.log(todo.title)
    this.todoDelete.emit(todo);
  }

  onCheckboxclick(todo: Todo){
    this.todoCheckbox.emit(todo)
  }
}
