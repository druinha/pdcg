import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  lang: 'en' | 'es' | 'gl' = 'en';

  translations = {
    en: {
      contactHeader: "Let's Connect",
      contactSubtext:
        "Ready to bring your project to life? Let's discuss your requirements and create something amazing together.",
      getInTouchTitle: 'Get in Touch',
      getInTouchDescription:
        "Whether you need a budget-friendly WordPress site, a complex Angular application, or a mobile app, I'm here to help. Let's discuss your project requirements and find the perfect solution.",
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      availableWorldwide: 'Available Worldwide',
      whyChooseMe: 'Why Choose Me?',
      yearsExperience: 'Years Experience',
      projectsCompleted: 'Projects Completed',
      supportAvailable: 'Support Available',
    },
    es: {
      contactHeader: 'Conectemos',
      contactSubtext:
        '¿Listo para lanzar tu proyecto? Hablemos de tus requisitos y creemos algo increíble juntos.',
      getInTouchTitle: 'Ponte en contacto',
      getInTouchDescription:
        'Ya sea una web WordPress económica, una app Angular compleja o una app móvil, estoy aquí para ayudarte.',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      location: 'Ubicación',
      availableWorldwide: 'Disponible mundialmente',
      whyChooseMe: '¿Por qué elegirme?',
      yearsExperience: 'Años de experiencia',
      projectsCompleted: 'Proyectos completados',
      supportAvailable: 'Soporte 24/7',
    },
    gl: {
      contactHeader: 'Conectemos',
      contactSubtext:
        'Listo para poñer en marcha o teu proxecto? Falemos dos teus requisitos e creemos algo incrible xuntos.',
      getInTouchTitle: 'Contacta comigo',
      getInTouchDescription:
        'Xa sexa unha web económica, unha app complexa en Angular ou unha app móbil, estou aquí para axudarche.',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      location: 'Localización',
      availableWorldwide: 'Dispoñible en todo o mundo',
      whyChooseMe: 'Por que escollerme?',
      yearsExperience: 'Anos de experiencia',
      projectsCompleted: 'Proxectos completados',
      supportAvailable: 'Soporte 24/7',
    },
  };
  constructor(private langService: LanguageService) {
    this.langService.lang$.subscribe((l) => {
      this.lang = l;
    });
  }
}
