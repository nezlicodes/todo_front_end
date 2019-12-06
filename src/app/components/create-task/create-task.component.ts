import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  public addTaskForm: FormGroup;
  public loading= false;
  constructor(private fb: FormBuilder, private taskService:TasksService, private router: Router) { }

  ngOnInit() {
    this.addTaskForm = this.fb.group({
      name: ['', Validators.required],
      description : ['', Validators.required],
      completed: ['', Validators.required]
    })
  }

  createTask() {
    this.loading = true;
    this.taskService.createTask(this.addTaskForm.value)
    .subscribe(res => {this.loading = false;
      this.router.navigateByUrl('/tasks')
    }, err=> {this.loading = false;
      err})
  }
}
