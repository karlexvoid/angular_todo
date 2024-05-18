import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { CommonModule } from '@angular/common'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TodosComponent,
    RouterOutlet,
    NavbarComponent,
    [CommonModule]
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dummy_pro';

}
