import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformacionAsignaturaPage } from './informacion-asignatura.page';

describe('InformacionAsignaturaPage', () => {
  let component: InformacionAsignaturaPage;
  let fixture: ComponentFixture<InformacionAsignaturaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InformacionAsignaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
