import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

// SERVICIO
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  public email:string;
  public pass:string;

  constructor(
    private UserService: UserService,
    public authService: AuthService,
    public toastr: ToastrService,
    public router: Router
  ) { }

  ngOnInit() {
    this.UserService.getUser();
  }

  onSubmitAddUser(){
    this.authService.registerUser(this.email,this.pass)
    .then ((res)=>{
      this.toastr.success("Registro","Usuario Registrado!")
      this.UserService.insertUser(this.email,this.pass);
      this.router.navigate(['/privado']);
    }).catch((err)=>{
      this.toastr.error("Registro","Usuario mal registrado!")
      this.router.navigate(['/register']);
    })
  }

  resetForm(userForm?: NgForm){
    if(userForm != null)
    userForm.reset();
    this.UserService.selectUser = new User();
  }


}
