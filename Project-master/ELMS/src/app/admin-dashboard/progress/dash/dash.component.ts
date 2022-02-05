import { Component, OnInit } from '@angular/core';
import { GlobalserviceService } from 'src/app/globalservice.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  entryArray:any;
  entryList:any;
  p:number=1;
  term: string ='';
 


  constructor( private _gbser:GlobalserviceService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this._gbser.getRecord('entries').subscribe((res) => {
      this.entryArray = res;
      console.log(this.entryArray);
      this.entryList = this.entryArray.datalist;
    });
  }
  deleteData(id: any) {
    if (confirm(`Are you sure you want to Delete this Entry having Id : ${id}`)) {
      this._gbser.deleteRecord('entries', id).subscribe(() => {
        alert('Entry Deleted Successfully');
        this.fetchData();
      });
    }
  }
}
