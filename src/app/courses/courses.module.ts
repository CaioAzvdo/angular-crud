import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './containers/courses/courses.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CourseFormComponent } from './course-form/course-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatOption, MatSelect} from "@angular/material/select";
import { CoursesListComponent } from './courses-list/courses-list.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseFormComponent,
    CoursesListComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    MatSelect,
    MatOption
  ]
})
export class CoursesModule { }
