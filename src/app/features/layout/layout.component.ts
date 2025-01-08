import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from '../search/search.component';
import { TerminosComponent } from '../administracion/terminos/terminos.component';
import { TypeheadComponent } from '../administracion/typehead/typehead.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NgbNavModule,
    SearchComponent,
    TerminosComponent,
    TypeheadComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
