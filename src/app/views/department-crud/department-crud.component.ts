import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-department-crud',
  templateUrl: './department-crud.component.html',
  styleUrls: ['./department-crud.component.css']
})

export class DepartmentCrudComponent implements OnInit {

  constructor(private router: Router,private headerService: HeaderService) {
    this.headerService.headerData = {
      title: 'Cadastro de Departamentos',
      icon: 'apartment',
      routeUrl: '/departments'
    }
   }

  ngOnInit(): void {
 
  }

  navgateToProductCreate(): void {
    this.router.navigate(['/departments/create'])
    
  }
}
