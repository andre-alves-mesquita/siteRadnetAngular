import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralDoAssinanteComponent } from './central-do-assinante.component';

describe('CentralDoAssinanteComponent', () => {
  let component: CentralDoAssinanteComponent;
  let fixture: ComponentFixture<CentralDoAssinanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralDoAssinanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralDoAssinanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
