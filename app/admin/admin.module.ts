import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { ProjectComponent } from './project/project.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';

// CommonModule is a built in module that exports all the basic Angular
// directives and pipes, such as [NgIf](https://angular.io/api/common/NgIf),
// [NgForOf](https://angular.io/api/common/NgForOf),
// [DecimalPipe](https://angular.io/api/common/DecimalPipe), etc.

@NgModule({
  declarations: [ProjectListComponent, ProjectCreateComponent, ProjectUpdateComponent, ProjectComponent, LoginComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
