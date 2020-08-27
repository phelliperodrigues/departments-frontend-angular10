import { DepartmentService } from './../department.service';
import { Department } from './../department.model';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-department-read',
  templateUrl: './department-read.component.html',
  styleUrls: ['./department-read.component.css']
})
export class DepartmentReadComponent implements OnInit {

  departments: Department[]
  displayedColumns = ['id','name', 'region', 'city', 'state', 'boardDirector', 'action' ]
  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.departmentService.read().subscribe(departments => {
      this.departments = departments
      console.log(departments);
      
    })
  }

}
