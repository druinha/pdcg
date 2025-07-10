import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  lang: 'en' | 'es' | 'gl' = 'en';

  texts = {
    en: {
      title: 'Smart Digital Solutions for Modern Businesses',
      subtitle:
        'We build fast, scalable websites and hybrid mobile apps — and offer expert consulting for your next digital project.',
      services: [
        'Hybrid Mobile Apps',
        'Website Development',
        'Technical Consulting',
      ],
      cta: 'Explore Our Services ↓',
    },
    es: {
      title: 'Soluciones digitales inteligentes para negocios modernos',
      subtitle:
        'Construimos sitios web rápidos y escalables y aplicaciones móviles híbridas — y ofrecemos consultoría experta para tu próximo proyecto digital.',
      services: [
        'Apps móviles híbridas',
        'Desarrollo web',
        'Consultoría técnica',
      ],
      cta: 'Explora nuestros servicios ↓',
    },
    gl: {
      title: 'Solucións dixitais intelixentes para negocios modernos',
      subtitle:
        'Creamos sitios web rápidos e escalables e aplicacións móbiles híbridas — e ofrecemos consultoría experta para o teu próximo proxecto dixital.',
      services: [
        'Apps móbiles híbridas',
        'Desenvolvemento web',
        'Consultoría técnica',
      ],
      cta: 'Explora os nosos servizos ↓',
    },
  };

  constructor(private langService: LanguageService) {
    this.langService.lang$.subscribe((l) => (this.lang = l));
  }

  scrollToServices() {
    const el = document.getElementById('services');
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
