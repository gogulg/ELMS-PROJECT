import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalserviceService } from 'src/app/globalservice.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  PlannerDetails:any;
  empObj:any;

  constructor(private _gbser:GlobalserviceService , private _router:Router) { }

  ngOnInit(): void {
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
    this._gbser.createRecord('planings', empObj ).subscribe(() => {
      alert('New Record Added Successfully');
      this._router.navigate(['/admindashboard/planner']);
      
    });
  }
}

