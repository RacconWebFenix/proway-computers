import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPersquisaComponent } from './barra-persquisa.component';

describe('BarraPersquisaComponent', () => {
  let component: BarraPersquisaComponent;
  let fixture: ComponentFixture<BarraPersquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraPersquisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraPersquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
