import { Component, OnInit } from '@angular/core';
import { TypeheadComponent } from '../administracion/typehead/typehead.component';
import { Itermino } from '../../core/models/termino.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { IframeTutorialComponent } from '../administracion/terminos/iframe-tutorial/iframe-tutorial.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    TypeheadComponent,
    AsyncPipe,
    CommonModule,
    IframeTutorialComponent,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public newTermino!: Itermino | null;
  meLlegaInfodelComponenteHijo(event: any) {
    // console.log('estamos en el componente padre recibendo del hijo', event);
    //vamos a construir un funcion y la vamos a pasar el itermino
    this.cargaTermino(event);
  }
  cargaTermino(objetoQueLLega: any) {
    //dentro de la funcion voy a pasar el itermino a una propiedad de search (padre)
    //voy a cargar la propiedad nueva de itermino.
    const terminoTemp: Itermino = {
      Id: objetoQueLLega.id,
      Termino: objetoQueLLega.termino,
      Descripcion: objetoQueLLega.descripcion,
      FechaCreacion: objetoQueLLega.fechaCreacion,
      FechaModificacion: objetoQueLLega.fechaModificacion,
      ImagenUrl: objetoQueLLega.imagenUrl,
      Link: objetoQueLLega.link,
      NombreArchivo: objetoQueLLega.nombreArchivo,
    };
    this.newTermino = terminoTemp;
  }
}
