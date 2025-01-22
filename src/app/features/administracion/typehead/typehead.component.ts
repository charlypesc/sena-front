import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgbTypeahead,
  NgbTypeaheadSelectItemEvent,
} from '@ng-bootstrap/ng-bootstrap';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  of,
  OperatorFunction,
  switchMap,
  tap,
} from 'rxjs';
import { Item, Itermino } from '../../../core/models/termino.model';
import { Appservice } from '../../../core/services/appservice.service';
// const items: Item[] = [
//   { id: 1, termino: 'Angular', link: '/angular' },
//   { id: 2, termino: 'React', link: '/react' },
//   { id: 3, termino: 'Vue', link: '/vue' },
//   { id: 4, termino: 'Svelte', link: '/svelte' },
// ];
@Component({
  selector: 'app-typehead',
  standalone: true,
  imports: [NgbTypeahead, CommonModule, FormsModule],
  templateUrl: './typehead.component.html',
  styleUrl: './typehead.component.css',
})
export class TypeheadComponent {
  @Input('nameLabel') public nameLabel: string = 'Termino';
  @Output('paraElComponentePadre')
  public paraElComponentePadre: EventEmitter<any> = new EventEmitter<any>();
  termino$ = this.appService.getDataAction<Itermino>('/Api/Terminos');
  constructor(private appService: Appservice) {}
  model: string = '';
  formatter = (value: any) => {
    if (typeof value === 'string') {
      return value;
    } else {
      return value['termino'];
    }
  };

  search: OperatorFunction<string, readonly any[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((term) =>
        term.length < 2
          ? of([]) // Si el término es menor a 2 caracteres, devolvemos un observable vacío
          : this.termino$.pipe(
              map((items) =>
                items
                  .filter((item: Itermino) =>
                    item['Termino'].toLowerCase().includes(term.toLowerCase())
                  )
                  .map((item: Itermino) => ({
                    id: item['Id'],
                    descripcion: item['Descripcion'],
                    fechaCreacion: item['FechaCreacion'],
                    fechaModificacion: item['FechaModificacion'],
                    imagenUrl: item['ImagenUrl'],
                    link: item['Link'],
                    termino: item['Termino'],
                  }))
                  .slice(0, 10)
              )
            )
      )
    );

  onSelect(event: NgbTypeaheadSelectItemEvent) {
    // console.log('estamo en el comp hijo pasandole al com padre', event);
    this.paraElComponentePadre.emit(event);
  }
}
