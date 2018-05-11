import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public email:string;
  public password:string;

  constructor(
    public authService: AuthService,
    public toastr: ToastrService,
    public router: Router

  ) { }

  ngOnInit() {
  }

  onSumbitLog(){
    this.authService.loginEmail(this.email,this.password)
    .then((res)=>{
      this.router.navigate(['/']);
    }).catch((err)=>{
      this.toastr.error("Fallo Login","No has podido logearte");
      this.router.navigate(['/login']);
    });
  }

}
