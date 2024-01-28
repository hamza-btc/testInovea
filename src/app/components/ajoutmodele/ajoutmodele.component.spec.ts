import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutmodeleComponent } from './ajoutmodele.component';

describe('AjoutmodeleComponent', () => {
  let component: AjoutmodeleComponent;
  let fixture: ComponentFixture<AjoutmodeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjoutmodeleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutmodeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
