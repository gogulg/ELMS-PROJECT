import { Component, OnInit } from '@angular/core';
import { GlobalserviceService } from 'src/app/globalservice.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  teachArray:any;
  teachList:any;


  constructor(private _gbser:GlobalserviceService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this._gbser.getRecord('teach').subscribe((res) => {
      // if(this._gbser.check_signIn==)
      this.teachArray = res;
      console.log(this.teachArray);
      this.teachList = this.teachArray.datalist;
      console.log(this._gbser.check_signIn)
    });
  }
 

}
