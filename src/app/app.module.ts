import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatCardModule } from '@angular/material/card'
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule } from "@angular/material/input";
import {  MatSidenavModule } from "@angular/material/sidenav";
import { MatDialogModule } from "@angular/material/dialog";
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list'
import { AboutComponent } from './components/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './services/message.service';
import { HttpErrorHandlerService } from './services/http-error-handler.service';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { SingleTaskComponent } from './components/single-task/single-task.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {NgxLoadingModule} from 'ngx-loading';
import { EditTaskModalComponent } from './components/edit-task-modal/edit-task-modal.component'
@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AboutComponent,
    CreateTaskComponent,
    SingleTaskComponent,
    HomePageComponent,
    EditTaskModalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule,
    MatRadioModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSidenavModule,
    MatInputModule, 
    MatDialogModule,
    FlexLayoutModule,
    DragDropModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [MessageService, HttpErrorHandlerService],
  bootstrap: [AppComponent],
  entryComponents: [EditTaskModalComponent]
})
export class AppModule { }
