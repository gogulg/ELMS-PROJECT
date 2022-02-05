import { Component, OnInit } from '@angular/core';
import { GlobalserviceService } from 'src/app/globalservice.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
    plannerArray:any;
    plannerList:any;
    p:number=1;
    term: string ='';

  constructor( private _gbser:GlobalserviceService) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this._gbser.getRecord('planings').subscribe((res) => {
      this.plannerArray = res;
      console.log(this.plannerArray);
      this.plannerList = this.plannerArray.datalist;
    });
  }
  deleteData(id: any) {
    if (confirm(`Are you sure you want to Delete this Entry having Id : ${id}`)) {
      this._gbser.deleteRecord('planings', id).subscribe(() => {
        alert('Record Deleted Successfully');
        this.fetchData();
      });
    }
  }
}
