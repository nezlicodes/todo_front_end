import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SingleTaskComponent } from '../single-task/single-task.component';
import { TasksService } from 'src/app/services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
export interface Task {
 name: string;
  description: string;
  completed:any,
  id:any
}

@Component({
  selector: 'app-edit-task-modal',
  templateUrl: './edit-task-modal.component.html',
  styleUrls: ['./edit-task-modal.component.css']
})
export class EditTaskModalComponent implements OnInit {

  public id:any;
  public editTaskForm: FormGroup;
  constructor(private fb: FormBuilder,  public dialogRef: MatDialogRef<SingleTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task, private taskService: TasksService, private ar: ActivatedRoute, private router: Router) { }

    public loading = false;
  ngOnInit() {
    this.id = this.ar.snapshot.paramMap.get('id');
    this.editTaskForm = this.fb.group({
      name:['', Validators.required],
      description:['', Validators.required],
      completed: [0, Validators.required]
    })
  }

  updateTask() {
    this.loading = true;
    this.taskService.updateTask(this.data.id, this.editTaskForm.value).subscribe(res => 
      {this.loading = false;
      this.router.navigateByUrl('/tasks')}, err => {
        this.loading = false;
        alert('your request could not be sent. Please try again')
      })
  }
}
