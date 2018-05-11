import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  public email:string;
  public pass:string;

  constructor(
    public authService: AuthService,
    public toastr: ToastrService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authService.registerUser(this.email,this.pass)
    .then ((res)=>{
      this.toastr.success("Registro","Usuario Registrado!")
      this.router.navigate(['/privado']);
    }).catch((err)=>{
      this.toastr.error("Registro","Usuario mal registrado!")
      this.router.navigate(['/register']);
    })
  }


}
