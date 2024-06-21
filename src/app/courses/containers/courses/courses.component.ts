import { CoursesService } from '../../services/courses.service';
import { Component } from '@angular/core';
import { Course } from '../../model/course';
import {catchError, Observable} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent{
 courses$: Observable<Course[]>;



 constructor(
  private coursesService: CoursesService,
  private router : Router,
  private route : ActivatedRoute

 ){

  this.courses$ = this.coursesService.list()

 }
 onAdd(){
  console.log('onAdd')
  this.router.navigate(['new'], {relativeTo: this.route});
 }

}
