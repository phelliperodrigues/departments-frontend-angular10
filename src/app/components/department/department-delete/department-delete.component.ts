import { DepartmentService } from './../department.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from './../department.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-delete',
  templateUrl: './department-delete.component.html',
  styleUrls: ['./department-delete.component.css']
})
export class DepartmentDeleteComponent implements OnInit {

  department: Department
  
  boardDirectors = [
    {"id": 'Segurança', "name": "SECURITY"},
    {"id": 'Negocio', "name": "BUSINESS"}
  ]
  constructor(private service: DepartmentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readById(id).subscribe(department => {
      this.department = department
    })
  }
  deleteDepartment(): void {
    this.service.delete(this.department.id).subscribe(() => {
      this.service.showMessage('Departamento Deletado!')
      this.router.navigate(['/departments'])
    })
    
  }

  cancel(): void {
    this.router.navigate(['/departments'])
  }

}
