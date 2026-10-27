import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Taken } from './taken';

describe('Taken', () => {
  let component: Taken;
  let fixture: ComponentFixture<Taken>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Taken],
    }).compileComponents();

    fixture = TestBed.createComponent(Taken);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
