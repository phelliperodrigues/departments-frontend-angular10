import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component'
import { MatSidenavModule } from'@angular/material/sidenav'
import { MatCardModule } from'@angular/material/card'
import { MatIconModule } from'@angular/material/icon'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'

import { MatListModule} from '@angular/material/list';
import { MatSnackBarModule} from '@angular/material/snack-bar';

import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './views/home/home.component';
import { DepartmentCrudComponent } from './views/department-crud/department-crud.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { DepartmentCreateComponent } from './components/department/department-create/department-create.component'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'

import { MatInputModule} from '@angular/material/input'


import { HttpClientModule } from '@angular/common/http';
import { DepartmentReadComponent } from './components/department/department-read/department-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DepartmentUpdateComponent } from './components/department/department-update/department-update.component';
import { DepartmentDeleteComponent } from './components/department/department-delete/department-delete.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    DepartmentCrudComponent,
    RedDirective,
    ForDirective,
    DepartmentCreateComponent,
    DepartmentReadComponent,
    DepartmentUpdateComponent,
    DepartmentDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
