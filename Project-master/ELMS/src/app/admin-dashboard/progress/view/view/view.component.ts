import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalserviceService } from 'src/app/globalservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  empObj:any;
  stuname:any;
  id: number | undefined;
  entryArray:any;
  entryList:any;
  percentage:any;

  constructor(private _router:Router, private _gbser:GlobalserviceService, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((param: any) => {
      this.id = param.get('id');
      console.log(`id: ${this.id}`);

      this._gbser.getSingleRecord('entries', this.id).subscribe((res) => {
        this.entryArray = res;
        this.entryList = this.entryArray.singledata;
        this.percentage=((this.entryList.evs + this.entryList.maths +this.entryList.english + this.entryList.gk + this.entryList.science
          + this.entryList.hindi)/6)
        console.log(this.percentage)

        
      });
    });
  }





  
}

