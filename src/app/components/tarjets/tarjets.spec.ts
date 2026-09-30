import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tarjets } from './tarjets';

describe('Tarjets', () => {
  let component: Tarjets;
  let fixture: ComponentFixture<Tarjets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarjets],
    }).compileComponents();

    fixture = TestBed.createComponent(Tarjets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
