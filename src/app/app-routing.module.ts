import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AboutComponent } from './components/about/about.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { SingleTaskComponent } from './components/single-task/single-task.component';
import { ResolverService } from './services/resolvers/tasks/resolver.service';
import { SingleResolverService } from './services/resolvers/tasks/single-resolver.service';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
	{
        path: 'tasks',
        component: TaskListComponent,
        resolve: {tasks: ResolverService}
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {animation: 'AboutPage'}
    },
    {
        path: 'create-task',
        component: CreateTaskComponent
    },
    {
        path:'tasks/:id',
        component: SingleTaskComponent,
        resolve: {task:SingleResolverService},
        data:{animation: 'SingleTask'}
    },
    {
        path: '',
        component: HomePageComponent,

    }

];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}