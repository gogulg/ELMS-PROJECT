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
  entryArray:any;
  entryList:any;

  constructor(private _router:Router, private _gbser:GlobalserviceService, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((param: any) => {
      this.id = param.get('id');
      console.log(`id: ${this.id}`);
      this._gbser.getSingleRecord('entries', this.id).subscribe((res) => {
        this.entryArray = res;
        this.entryList = this.entryArray.singledata;
      });
    });
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
      gk:val.gk,
      science:val.science
      
  
    };
    this._gbser.updateRecord('entries', this.id, empObj).subscribe(() => {
      alert('Entry Details Updated Successfully');
      this._router.navigate(['/admindashboard/progress']);
    });
  }
  
}




