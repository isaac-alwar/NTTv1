import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../state/students/models/students.model';
import { studentsFeatureKey } from '../state/students/reducers/students.reducer';

const BASE_URL: string = "http://localhost:8090/api/";
const HEADER = { headers: new HttpHeaders({"Content-Type": "application/json" })}

@Injectable({
  providedIn: 'root'
})
export class StudentsService {


  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(BASE_URL + studentsFeatureKey);
  }


  addStudent(student: Student) {
    // const Student = { id: null, ...student };

    return this.http.post<Student>(
      BASE_URL,
      JSON.stringify(student),
      HEADER,
    );
  }

  getStudentById(id: number) {
    return this.http.get<Student>(BASE_URL + studentsFeatureKey + `${id}`)
  }

}
