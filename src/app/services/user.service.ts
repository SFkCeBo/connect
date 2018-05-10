import { Injectable } from '@angular/core';

import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList:AngularFireList<any>;
  selectUser : User = new User();

  constructor(private firebase: AngularFireDatabase) { }

  getUser(){
    return this.userList = this.firebase.list('users');
  }

  insertUser(user: User){
    this.userList.push({
      $key:user.$key,
      mail:user.mail,
      password:user.password,
      name:user.name,
      cognom:user.cognom,
      nacimiento:user.nacimiento,
      pais:user.pais,
      ciutat:user.ciutat,
      direccio:user.direccio,
      tipo:user.tipo,
      publicacio:user.$key,
      amigos:user.$key,
      petamistad:user.$key,
      cuentas:user.$key
    })
  }

  updateUser(user: User){
    this.userList.update(user.$key,{
      $key:user.$key,
      mail:user.mail,
      password:user.password,
      name:user.name,
      cognom:user.cognom,
      nacimiento:user.nacimiento,
      pais:user.pais,
      ciutat:user.ciutat,
      direccio:user.direccio,
      tipo:user.tipo,
      publicacio:user.$key,
      amigos:user.$key,
      petamistad:user.$key,
      cuentas:user.$key
    })
  }

  deleteUser($key: string){
    this.userList.remove($key);
  }
}
