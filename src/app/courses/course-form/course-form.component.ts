import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CoursesService} from "../services/courses.service";

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent {
  form : FormGroup
constructor(private formBuilder : FormBuilder, private service:CoursesService) {

  this.form = this.formBuilder.group({
    name: '',
    categoria: ''
  });

}
  onSubmit(){
  console.log(this.form.value);
  this.service.save(this.form.value)
  }

}
//   protected readonly onsubmit = onsubmit;
// }
