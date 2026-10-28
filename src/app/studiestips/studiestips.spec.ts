import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Studiestips } from './studiestips';

describe('Studiestips', () => {
  let component: Studiestips;
  let fixture: ComponentFixture<Studiestips>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studiestips],
    }).compileComponents();

    fixture = TestBed.createComponent(Studiestips);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});