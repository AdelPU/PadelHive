import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadelParticlesComponent } from './padel-particles.component';

describe('PadelParticlesComponent', () => {
  let component: PadelParticlesComponent;
  let fixture: ComponentFixture<PadelParticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadelParticlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadelParticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
