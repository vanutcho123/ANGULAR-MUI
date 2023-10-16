import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private httpClient: HttpClient) { }

  getTask(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/tasks`)
  }
  addTask(data: object): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/tasks`, data)
  }

  deleteTask(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/tasks/${id}`)
  }
}
