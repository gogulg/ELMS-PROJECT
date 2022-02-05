import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalserviceService } from 'src/app/globalservice.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  entryDetails:any;
  empObj:any;

  constructor( private _router:Router, private _gbser:GlobalserviceService) { }

  ngOnInit(): void {
  }

  sendData(val:any){
    console.log(val);
    const empObj={
  
     
      stuid:val.stuid,
      stuname:val.stuname,
      evs:val.evs,
      english:val.english,
      hindi:val.hindi,
      maths:val.maths,
      science:val.science,
      gk:val.gk
  
    };
    this._gbser.createRecord('entries', empObj ).subscribe(() => {
      alert('New entry Added Successfully');
      // this.entryDetails.reset();
      this._router.navigate(['/admindashboard/progress']);
      
    });
  }
}
