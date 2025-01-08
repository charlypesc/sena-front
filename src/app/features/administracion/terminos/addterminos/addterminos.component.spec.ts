import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddterminosComponent } from './addterminos.component';

describe('AddterminosComponent', () => {
  let component: AddterminosComponent;
  let fixture: ComponentFixture<AddterminosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddterminosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddterminosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
