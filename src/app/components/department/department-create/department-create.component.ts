import { BoardDirector } from './../department.model';
import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './../department.service'
import { Router } from '@angular/router'
import { Department } from '../department.model';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css']
})
export class DepartmentCreateComponent implements OnInit {

  department: Department = {
    name: '',
    region: '',
    city: '',
    state: '',
    boardDirector: null,
  }
  keys = Object.keys;
  values = Object.values;

  boardDirectors = [
    {"id": 'Segurança', "name": "SECURITY"},
    {"id": 'Negocio', "name": "BUSINESS"}
  ]

 
  constructor(private departmentService: DepartmentService, private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  createDepartment(): void {
    console.log(this.department);
    
    this.departmentService.create(this.department).subscribe(() => {
      this.departmentService.showMessage('Departamento Criado!')
      this.router.navigate(['/departments'])
    })

  }

  cancel(): void {
    this.router.navigate(['/departments'])
  }

}
