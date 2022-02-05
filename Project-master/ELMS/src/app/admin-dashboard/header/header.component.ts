import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalserviceService } from 'src/app/globalservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  imgLogo: string = '../../assets/images/lo.png';
  imgLogoName: string = 'logoImg';
  display = sessionStorage.getItem('username');
  curUserData: any;
  constructor(
    private _router: Router,
    private _gbser:GlobalserviceService
  ) { }

  ngOnInit(): void { }

  logOut() {
    if (confirm(`Are you sure to want to Log Out ?`)) {
      this._gbser.signOut();
      alert('Logged Out Successfully');
      this._router.navigate(['']);
    }
  }
}