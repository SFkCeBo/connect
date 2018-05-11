import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-page',
  templateUrl: './navbar-page.component.html',
  styleUrls: ['./navbar-page.component.css']
})
export class NavbarPageComponent implements OnInit {
  public isLogin: boolean;
  public nombreUser: string;
  public emailUser: string;
  public fotoUser:string;


  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        this.isLogin=true;
        this.nombreUser=auth.displayName;
        this.emailUser=auth.email;
        this.fotoUser=auth.photoURL;
      }else{
        this.isLogin = false;
      }
    })
  }

  onClickLogout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
