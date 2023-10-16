import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MUI-CRUD';
  constructor(private taskService: TaskService) { }
  ngOnInit(): void {
    this.getDataTask()
  }

  getDataTask(): void {
    this.taskService.getTask().subscribe({
      next: (res: object[]) => {
        console.log(res);

      },
      error: (err: object) => {
        console.log(err);
      }
    })
  }

}
