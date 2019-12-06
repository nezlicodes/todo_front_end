import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterState } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TasksService } from '../../tasks.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any> {

  constructor(private taskService:TasksService) { }

  resolve(){
    let tasks = this.taskService.getAllTasks();
    return tasks
  }
}
