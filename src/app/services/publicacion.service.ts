import { Injectable } from '@angular/core';

import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';

import { Publicacion } from '../models/publicacion';


@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  publicacionList: AngularFireList<any>;

  selectedPublicacion: Publicacion = new Publicacion();


  constructor(
    private firebase:AngularFireDatabase
  ) { }

  getPublicacion(){
   return this.publicacionList = this.firebase.list('publicacion');
  }

  insertPublicacion(publicacion:Publicacion){
    this.publicacionList.push({
      cuerpo: publicacion.cuerpo,
      media:publicacion.media,
      likes:0,
      denuncies:0,
      comment:publicacion.comment
    });
  }

  updateProduct(publicacion:Publicacion){
    this.publicacionList.update(publicacion.$key,{
      cuerpo: publicacion.cuerpo,
      media:publicacion.media,
      likes:publicacion.likes,
      denuncies:publicacion.denuncies,
      comment:publicacion.comment
    });
  }

  deleteProduct($key:string){
    this.publicacionList.remove($key);
  }

}
