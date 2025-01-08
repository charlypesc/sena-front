import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeTutorialComponent } from './iframe-tutorial.component';

describe('IframeTutorialComponent', () => {
  let component: IframeTutorialComponent;
  let fixture: ComponentFixture<IframeTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IframeTutorialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IframeTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
