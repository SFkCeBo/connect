import { Component, OnInit } from '@angular/core';

import { PublicacionService } from '../../../services/publicacion.service';

import { NgForm } from '@angular/forms';

import { Publicacion } from '../../../models/publicacion';

// ALERTA
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(
    private publicacionService: PublicacionService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.publicacionService.getPublicacion();
    this.resetForm()
  }

  onSubmit(publicacionForm: NgForm){
    this.publicacionService.insertPublicacion(publicacionForm.value)
    this.resetForm(publicacionForm);
    this.toastr.success('Operacion Completada','Producto Alterado');
  }


  resetForm(publicacionForm?: NgForm){
    if(publicacionForm != null)
    publicacionForm.reset();
    this.publicacionService.selectedPublicacion = new Publicacion();
  }
}
