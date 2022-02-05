import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { GlobalserviceService } from 'src/app/globalservice.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {
  enrollArray: any;
  modalRef?: BsModalRef;
  p: number = 1;
  term: string = '';
  courseArray: any;
  courseList: any;
  newdatalist: any;
  pages: number = 5;
  constructor(private _gbser:GlobalserviceService, private modalService: BsModalService) { }


  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this._gbser.getRecord('courses').subscribe((res) => {
      this.courseArray = res;
      console.log(this.courseArray);
      this.courseList = this.courseArray.datalist;
      this.newdatalist= this.courseList.filter((item: any) => {
        return item.course_status ==='active'
      });
      console.log(this.newdatalist)
    });
  }
  
  onOptionsSelected(value: any) {
    this.pages = value;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  deleteData(id: any) {
    if (confirm(`Are you sure you want to Delete this Course having Id : ${id}`)) {
      this._gbser.deleteRecord('courses', id).subscribe(() => {
        alert('Course Deleted Successfully');
        this.fetchData();
      });
    }
  }
}
