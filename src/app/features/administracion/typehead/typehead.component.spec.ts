import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeheadComponent } from './typehead.component';

describe('TypeheadComponent', () => {
  let component: TypeheadComponent;
  let fixture: ComponentFixture<TypeheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeheadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
