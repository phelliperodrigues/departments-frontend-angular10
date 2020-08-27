import { DepartmentDeleteComponent } from './components/department/department-delete/department-delete.component';
import { DepartmentUpdateComponent } from './components/department/department-update/department-update.component';
import { DepartmentCreateComponent } from './components/department/department-create/department-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { DepartmentCrudComponent} from './views/department-crud/department-crud.component'


const routes: Routes = [
  {
  path: "",
  component: HomeComponent
  },
  {
    path: "departments",
    component: DepartmentCrudComponent
  },
  {
    path: "departments/create",
    component: DepartmentCreateComponent
  },
  {
    path: "departments/update/:id",
    component: DepartmentUpdateComponent
  },
  {
    path: "departments/delete/:id",
    component: DepartmentDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
