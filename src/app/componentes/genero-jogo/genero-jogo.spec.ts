import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroJogo } from './genero-jogo';

describe('GeneroJogo', () => {
  let component: GeneroJogo;
  let fixture: ComponentFixture<GeneroJogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneroJogo],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneroJogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
