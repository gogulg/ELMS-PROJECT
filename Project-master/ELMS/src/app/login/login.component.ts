import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {
  patternEmail,
  patternPass,
} from '../../app/shared/constant/constant';
import { GlobalserviceService } from 'src/app/globalservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  imgLogo: string = '../../assets/images/lo.png';
  imgLogoName: string = 'logoImg';
  usersEmail: any;
  usersPass: any;
  usersArray: any;
  userLogData: any;
  currentUserName: any;
  typ: any;
  usersList: any;
  newuserList:any
  constructor(
    private _router: Router,
    private _gbser:GlobalserviceService
  ) { }

  ngOnInit(): void {

    this.userLogData = new FormGroup({
      userEmail: new FormControl('', [
        Validators.required,
        Validators.pattern(patternEmail),
      ]),
      userPwd: new FormControl('', [
        Validators.required,
        Validators.pattern(patternPass),
      ]),
      role: new FormControl('', [
        Validators.required
      ]),
    });
  }

  logInCheck(val: any) {
    this.typ = val.role
    // this._router.navigate(['/admindashboard/dashboard']);
    // if (this.typ === 'Admin') {
    //   this. _gbser.getRecord('signin').subscribe((res) => {
    //     this.usersArray = res;
    //     this.usersList = this.usersArray.datalist;
    //     this.newuserList = this.usersList.filter((item: any) => {
    //       return item.username == this.usersEmail && item.password == this.usersPass && item.type==this.typ;
    //     });
    //     if (this.newuserList.length > 0) {
    //       this. _gbser.signIn(this.usersEmail);
        
    //     } else {
    //       this.usersEmail = '';
    //       this.usersPass = '';
    //       alert('You Entered Wrong Credentials...Try Again !!!');
    //     }
    //   });
    // }
     
      this. _gbser.getRecord('teach').subscribe((res) => {
        this.usersArray = res;
        this.usersList = this.usersArray.datalist;
        this.newuserList = this.usersList.filter((item: any) => {
          return item.username == this.usersEmail && item.password == this.usersPass && item.type==this.typ;
        });
        if (this.newuserList.length > 0) {
          this. _gbser.signIn(this.usersEmail);
          alert("Teacher Credential")
          this._gbser.check_signIn=this.usersEmail;
          // console.log(this._gbser.check_signIn)
          this._router.navigate(['/admindashboard/dashboard']);
        } else {
          this.usersEmail = '';
          this.usersPass = '';
          alert('You Entered Wrong Credentials...Try Again !!!');
        }
      });
    }
  //   else {
    
  //     this. _gbser.getRecord('signin').subscribe((res) => {
  //       this.usersArray = res;
  //       this.usersList = this.usersArray.datalist;
  //       this.newuserList = this.usersList.filter((item: any) => {
  //         return item.username == this.usersEmail && item.password == this.usersPass && item.type == this.typ;
  //       });
  //       if (this.newuserList.length > 0) {
  //         this. _gbser.signIn(this.usersEmail);
  //         alert("Student Credential")
  //         // this._router.navigate(['/admindashboard/sliders']);
  //       } else {
  //         this.usersEmail = '';
  //         this.usersPass = '';
  //         alert('You Entered Wrong Credentials...Try Again !!!');
  //       }
  //     });
  //   }
  
  // }
}
