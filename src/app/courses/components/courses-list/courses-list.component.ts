import {Component, Input, input, Output} from '@angular/core';
import {Course} from "../../model/course";
import {ActivatedRoute, Router} from "@angular/router";
import {CoursesService} from "../../services/courses.service";
import {async, Observable} from "rxjs";
import EventEmitter from "node:events";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})

export class CoursesListComponent {
  courses$: Observable<Course[]>;

  //@Input() courses$ : Course[] = [];
  readonly  displayedColumns = ['name', 'categoria','actions'];


  constructor(private router : Router,
              private route : ActivatedRoute,
              private coursesService: CoursesService,
  ) {
    this.courses$ = this.coursesService.list();

  }

  onAdd(){
    console.log('onAdd')
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
