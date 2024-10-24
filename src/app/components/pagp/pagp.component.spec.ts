import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagpComponent } from './pagp.component';

describe('PagpComponent', () => {
  let component: PagpComponent;
  let fixture: ComponentFixture<PagpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
