import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskModalComponent } from '../edit-task-modal/edit-task-modal.component';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent implements OnInit {

  public id:any;
  public task:any
  public loading = false;
  constructor(private activatedRoute: ActivatedRoute, private taskService: TasksService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.task = this.activatedRoute.snapshot.data.task;
  }

  deleteTask(id) {
    this.loading = true;
    this.taskService.deleteTask(id).subscribe(
      res => {
        this.loading = false;
        this.router.navigateByUrl('/tasks');
      },
      err =>
      {
        this.loading = false;
        console.log(err);
      }
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditTaskModalComponent,{  width: '30rem',  data: {name: this.task.name, description: this.task.description, completed: this.task.completed, id:this.id}});
   
  }
}
