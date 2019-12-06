import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TasksService } from '../../tasks.service';

@Injectable({
  providedIn: 'root'
})
export class SingleResolverService implements Resolve<any> {

  constructor(private tasksService: TasksService) { }
  resolve(route:ActivatedRouteSnapshot) {
    let id = route.paramMap.get('id')
    let task = this.tasksService.getSingleTask(id);
    return task;
  }
}
