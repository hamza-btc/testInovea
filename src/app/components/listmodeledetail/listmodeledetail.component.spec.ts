import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmodeledetailComponent } from './listmodeledetail.component';

describe('ListmodeledetailComponent', () => {
  let component: ListmodeledetailComponent;
  let fixture: ComponentFixture<ListmodeledetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListmodeledetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListmodeledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
