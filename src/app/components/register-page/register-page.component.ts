import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';


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
    public toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authService.registerUser(this.email,this.pass)
    .then ((res)=>{
      this.toastr.success("Registro","Usuario Registrado!")
      console.log(res);
    }).catch((err)=>{
      this.toastr.error("Registro","Usuario mal registrado!")
      console.log(err);
    })
  }


}
