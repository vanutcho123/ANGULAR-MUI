import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditFormTaskComponent } from '../add-edit-form-task/add-edit-form-task.component';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private taskService: TaskService, public dialog: MatDialog) { }
  openAddEditFormEmployee() {
    const dialogRef = this.dialog.open(AddEditFormTaskComponent);

    dialogRef.afterClosed().subscribe({
      next: res => {
        if (res) {
          this.taskService.getTask().subscribe({
            next: val => {
              console.log(val);
            }
          })
        }
      }
    });
  }
}
