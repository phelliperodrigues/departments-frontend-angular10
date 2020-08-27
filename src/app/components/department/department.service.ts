import { map, catchError, timeout } from 'rxjs/operators';
import { Injectable, ErrorHandler } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Department} from './department.model'
import { Observable, EMPTY } from 'rxjs';
import { environment } from '../../env/env'
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json'
    })
  };

  // baseUrl = "http://localhost:8080/api/departments"
  
   baseUrl = environment.baseUrl

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg,'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError? ['msg-error'] : ['msg-success']
    })    
  }

  create(department: any) :Observable<Department>{
      return this.http.post<any>(this.baseUrl, department, this.httpOptions).pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e) )
      );
  }

  errorHandler(e: any) : Observable<any>{
    
    this.showMessage(e.error.errors, true)
    return EMPTY
  }
  read(): Observable<Department[]> {
    const url = `${this.baseUrl}/all`
    return this.http.get<Department[]>(url)
  }

  readById(id: string) :Observable<Department>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Department>(url)
  }

  update(department: any) :Observable<Department>{
    const url = `${this.baseUrl}/${department.id}`
    return this.http.put<any>(url, department).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e) )
    );
  }

  delete(id: string) :Observable<Department>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Department>(url)
  }

}
