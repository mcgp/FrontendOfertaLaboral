import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CrearDepartamentoComponent } from './crear-departamento.component';

describe('CrearDepartamentoComponent', () => {
  let component: CrearDepartamentoComponent;
  let fixture: ComponentFixture<CrearDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDepartamentoComponent ],
      imports: [ReactiveFormsModule],  // Also add it to 'imports' array

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
