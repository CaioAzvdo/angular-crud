import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'http://localhost:8080/api/courses';

  constructor(private HttpClient: HttpClient) { }

  list(){
    return this.HttpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(courses => console.log(courses))
    );
  }
  save(record: Course){
    console.log(record)
    return this.HttpClient.post<Course>(this.API, record).pipe(first()).subscribe() ;
  }

}
