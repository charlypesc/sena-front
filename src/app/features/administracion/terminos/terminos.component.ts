import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { Appservice } from '../../../core/services/appservice.service';
import { Itermino } from '../../../core/models/termino.model';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IframeTutorialComponent } from './iframe-tutorial/iframe-tutorial.component';
import { AddterminosComponent } from './addterminos/addterminos.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { Config } from 'datatables.net';
import { TypeheadComponent } from '../typehead/typehead.component';

@Component({
  selector: 'app-terminos',
  standalone: true,
  imports: [CommonModule, AddterminosComponent, DataTablesModule],
  templateUrl: './terminos.component.html',
  styleUrl: './terminos.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TerminosComponent implements OnInit {
  public termino$ = new Observable<Itermino[]>();
  public modal!: NgbModalRef;
  public terminocomopropiedaddelcomponente!: Itermino | null;
  public dtOptions: Config = this.appService.getTablaConfiguration();

  constructor(public appService: Appservice, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getTerminos();
  }

  public edit(
    template: TemplateRef<any>,
    terminodentrodelafuncion: Itermino | null
  ) {
    this.terminocomopropiedaddelcomponente = terminodentrodelafuncion!;
    setTimeout(
      () =>
        (this.modal = this.modalService.open(template, {
          size: 'lg',
        })),
      100
    );
  }
  public deleteTermino(id: number) {
    if (confirm('¿Está seguro de eliminar el registro?')) {
      this.appService
        .deleteActionById('/api/terminos', id)
        .subscribe((data) => {
          this.getTerminos();
        });
    }
  }

  getTerminos() {
    this.termino$ = this.appService.getDataAction<Itermino>('/Api/Terminos');
  }
  onModalDismissed() {
    this.getTerminos();
    this.modal.dismiss();
  }
}
