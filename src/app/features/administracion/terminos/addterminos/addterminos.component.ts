import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Appservice } from '../../../../core/services/appservice.service';
import { Itermino } from '../../../../core/models/termino.model';

@Component({
  selector: 'app-addterminos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './addterminos.component.html',
  styleUrl: './addterminos.component.css',
})
export class AddterminosComponent implements OnInit {
  @Input('termino') public termino!: Itermino | null;
  @Output('onTerminoSaved') onTerminoSaved = new EventEmitter<string>();
  public terminosForm = this.fb.group({
    Id: [0],
    Termino: [''],
    Descripcion: [''],
    FechaCreacion: [new Date()],
    FechaModificacion: [new Date()],
    ImagenUrl: [''],
    Link: [''],
    // NombreArchivo: [''],
  });
  constructor(private fb: FormBuilder, private appservice: Appservice) {}
  ngOnInit(): void {
    if (this.termino !== null) {
      this.terminosForm.patchValue(this.termino);
    }
  }
  guardarTermino() {
    if (this.terminosForm.value.Id ?? 0 !== 0) {
      const terminoObject: Itermino = {
        Id: this.terminosForm.value.Id ?? 0,
        Termino: this.terminosForm.value.Termino ?? '',
        Descripcion: this.terminosForm.value.Descripcion ?? '',
        ImagenUrl: this.terminosForm.value.ImagenUrl ?? '',
        Link: this.terminosForm.value.Link ?? '',
      };
      this.appservice
        .UpdateControl(this.termino?.Id, terminoObject, '/api/terminos')
        .subscribe((data) => {
          this.onTerminoSaved.emit(data);
        });
    } else {
      this.appservice
        .NewControl(this.terminosForm.value, '/api/terminos')
        .subscribe((data) => {
          this.onTerminoSaved.emit(data);
        });
    }
  }
}
