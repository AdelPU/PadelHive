import { Component } from '@angular/core';
import { NgxParticlesModule } from '@tsparticles/angular';

import { loadFull } from 'tsparticles';
import type { Engine, Container } from '@tsparticles/engine';

@Component({
  selector: 'app-padel-particles',
  standalone: true,
  imports: [NgxParticlesModule],
  templateUrl: './padel-particles.component.html',
  styleUrls: ['./padel-particles.component.css']
})
export class PadelParticlesComponent {
  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }

  particlesLoaded(container: Container): void {}

  options = {
    background: {
      color: { value: '#0d1c1c' }
    },
    particles: {
      number: { value: 40, density: { enable: true, area: 800 } },
      color: { value: '#00ffaa' },
      shape: { type: 'circle' },
      opacity: { value: 0.5 },
      size: { value: { min: 2, max: 5 } },
      move: {
        enable: true,
        speed: 1.5,
        direction: 'none',
        outModes: { default: 'bounce' }
      },
      links: {
        enable: true,
        color: '#00ffaa',
        distance: 150,
        opacity: 0.4,
        width: 1
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        onClick: { enable: true, mode: 'push' }
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 4 }
      }
    },
    detectRetina: true
  };
}
