import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';

import { AdminGuard } from  './admin.guard';

// We are creating a parent admin route and its own
// child routes using the children property of the route which takes an array of routes.

// You can respectively access the ProjectListComponent,
// ProjectCreateComponent and ProjectUpdateComponent using
// the /admin/list, /admin/create and /admin/update paths.

export const routes: Routes = [
    {
        path: 'admin',
        component: ProjectComponent,
        children: [
            {
                path: 'list',
                component: ProjectListComponent,
                canActivate: [AdminGuard]
            },
            {
                path: 'create',
                component: ProjectCreateComponent,
                canActivate: [AdminGuard]
            },
            {
                path: 'update',
                component: ProjectUpdateComponent,
                canActivate: [AdminGuard]
            },
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    }
];

// Note: The canActivate property of the path object takes an array which means you can register multiple guards.

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {

}


