import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalserviceService } from 'src/app/globalservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  empObj:any;
  id: number | undefined;
  plannerArray:any;
  plannerList:any;

  constructor(private _gbser:GlobalserviceService, private _router:Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((param: any) => {
      this.id = param.get('id');
      console.log(`id: ${this.id}`);
      this._gbser.getSingleRecord('planings', this.id).subscribe((res) => {
        this.plannerArray = res;
        this.plannerList = this.plannerArray.singledata;
      });
    });
  }
  sendData(val:any){
    console.log(val);
    const empObj={
  
     
      id:val.id,
      subname:val.subname,
      subcode:val.subcode,
      sdate:val.sdate,
      stime:val.stime,
      sduration:val.sduration
      
  
    };
    this._gbser.updateRecord('planings', this.id, empObj).subscribe(() => {
      alert('Record Details Updated Successfully');
      this._router.navigate(['/admindashboard/planner']);
    });
  }
  

}
