import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalserviceService } from 'src/app/globalservice.service';
import {
  patternCourse,
  patterncourseTitle,
  patterncoursePrice,
} from 'src/app/shared/constant/constant';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  courseDetails: any;
  categoriesArray: any;
  categoriesArrayList: any; 
  constructor(
    private _router: Router,
    private _gbser:GlobalserviceService
  ) {}

  ngOnInit(): void {
    this.fetchData();
    this.courseDetails = new FormGroup({
      course_id: new FormControl('', [
        Validators.required,
        Validators.pattern(patternCourse),
      ]),
      course_title: new FormControl('', [
        Validators.required,
        Validators.pattern(patterncourseTitle),
      ]),
      course_price: new FormControl('', [
        Validators.required,
        Validators.pattern(patterncoursePrice),
      ]),
      course_category: new FormControl('', [
        Validators.required,
      ]),
    });
  }


  fetchData() {
    this._gbser.getRecord('categories').subscribe((res) => {
      this.categoriesArray = res;
      console.log(this.categoriesArray );
      this.categoriesArrayList = this.categoriesArray.datalist;
    });
  }

  getcourseDetails(val: any) {
    const courseObj = {
      course_id: val.course_id,
      course_category:val.course_category,
      course_title: val.course_title,
      course_price: val.course_price,
      course_status:"inactive"
    };
    this._gbser.createRecord('courses', courseObj).subscribe(() => {
      alert('New Course Added Successfully');
      this.courseDetails.reset();
      this._router.navigate(['/admindashboard/courses']);
    });
  }
}
