import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar-page',
  templateUrl: './navbar-page.component.html',
  styleUrls: ['./navbar-page.component.css']
})
export class NavbarPageComponent implements OnInit {
  public isLogin: boolean;
  public nombreUser: string;
  public emailUser: string;


  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        this.isLogin=true;
        this.nombreUser=auth.displayName;
        this.emailUser=auth.email;
      }else{
        this.isLogin = false;
      }
    })
  }

  onClickLogout(){
    this.authService.logout();
  }

}
