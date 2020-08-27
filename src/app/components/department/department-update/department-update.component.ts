import { Department } from './../department.model';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentService } from './../department.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
  styleUrls: ['./department-update.component.css']
})
export class DepartmentUpdateComponent implements OnInit {

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
  updateDepartment(): void {
    this.service.update(this.department).subscribe(() => {
      this.service.showMessage('Departamento Alterado!')
      this.router.navigate(['/departments'])
    })
    
  }

  cancel(): void {
    this.router.navigate(['/departments'])
  }
}
