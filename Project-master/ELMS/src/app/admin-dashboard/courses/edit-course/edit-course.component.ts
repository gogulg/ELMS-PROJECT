import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalserviceService } from 'src/app/globalservice.service';
import {
  patternCourse,
  patterncourseTitle,
  patterncoursePrice,
} from 'src/app/shared/constant/constant';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  courseDetails: any;
  categoriesArray: any;
  categoriesArrayList: any;
  courseArray: any;
  courseList: any;
  id: number | undefined;
  constructor(
    private _router: Router,
    private _gbser:GlobalserviceService,
    private _activatedRoute: ActivatedRoute
  ) { }

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
    this._activatedRoute.paramMap.subscribe((param: any) => {
      this.id = param.get('id');
      console.log(`id: ${this.id}`);
      this._gbser.getSingleRecord('courses', this.id).subscribe((res) => {
        this.courseArray = res;
        this.courseList = this.courseArray.singledata;
      });
    });
  }


  fetchData() {
    this._gbser.getRecord('categories').subscribe((res) => {
      this.categoriesArray = res;
      console.log(this.categoriesArray);
      this.categoriesArrayList = this.categoriesArray.datalist;
    });
  }

  getcourseDetails(val: any) {
    const courseObj = {
      course_id: val.course_id,
      course_category: val.course_category,
      course_title: val.course_title,
      course_price: val.course_price,
      course_status: "active"
    };
    this._gbser.updateRecord('courses', this.id, courseObj).subscribe(() => {
      alert('Course Details Updated Successfully');
      this._router.navigate(['/admindashboard/courses']);
    });
  }

}
