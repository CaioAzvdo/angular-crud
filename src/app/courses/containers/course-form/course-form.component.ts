import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CoursesService} from "../../services/courses.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent {
  form : FormGroup
constructor(private formBuilder : FormBuilder,
            private service:CoursesService,
            private _snackBar: MatSnackBar,
            private router : Router,
            private route : ActivatedRoute) {

  this.form = this.formBuilder.group({
    name: '',
    categoria: ''
  });

}
  onSubmit(){
  console.log(this.form.value);
  this.service.save(this.form.value).add(() => {
    this._snackBar.open('Curso salvo com sucesso', 'OK', {
      duration: 2000,
    });
  }
  )}



  onCancel() {
      this.router.navigate([''], {relativeTo: this.route});
  }
}
