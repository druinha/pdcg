import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact-webapp',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-webapp.component.html',
  styleUrl: './contact-webapp.component.scss',
})
export class ContactWebappComponent {
  lang: 'en' | 'es' | 'gl' = 'en';

  devForm: FormGroup;

  translations = {
    en: {
      contactForm: {
        title: 'Tell us about your project',
        fullName: 'Full Name',
        fullNamePlaceholder: 'Your full name',
        email: 'Email',
        emailPlaceholder: 'you@example.com',
        projectType: 'Project Type',
        projectTypeOptions: {
          web: 'Web Development',
          app: 'Mobile App Development',
          both: 'Both',
        },
        budget: 'Budget (optional)',
        budgetPlaceholder: 'e.g. €2000 - €5000',
        timeline: 'Timeline (optional)',
        timelinePlaceholder: 'e.g. 1-2 months',
        message: 'Message',
        messagePlaceholder: 'Describe your project goals and needs',
        submitButton: 'Send Message',
      },
    },
    es: {
      contactForm: {
        title: 'Cuéntanos sobre tu proyecto',
        fullName: 'Nombre completo',
        fullNamePlaceholder: 'Tu nombre completo',
        email: 'Correo electrónico',
        emailPlaceholder: 'tucorreo@ejemplo.com',
        projectType: 'Tipo de proyecto',
        projectTypeOptions: {
          web: 'Desarrollo Web',
          app: 'Desarrollo de App Móvil',
          both: 'Ambos',
        },
        budget: 'Presupuesto (opcional)',
        budgetPlaceholder: 'ej. 2000€ - 5000€',
        timeline: 'Plazo (opcional)',
        timelinePlaceholder: 'ej. 1-2 meses',
        message: 'Mensaje',
        messagePlaceholder:
          'Describe los objetivos y necesidades de tu proyecto',
        submitButton: 'Enviar mensaje',
      },
    },
    gl: {
      contactForm: {
        title: 'Cóntanos sobre o teu proxecto',
        fullName: 'Nome completo',
        fullNamePlaceholder: 'O teu nome completo',
        email: 'Correo electrónico',
        emailPlaceholder: 'teucorreo@exemplo.com',
        projectType: 'Tipo de proxecto',
        projectTypeOptions: {
          web: 'Desenvolvemento Web',
          app: 'Desenvolvemento de App Móbil',
          both: 'Ambos',
        },
        budget: 'Orzamento (opcional)',
        budgetPlaceholder: 'ex. 2000€ - 5000€',
        timeline: 'Prazo (opcional)',
        timelinePlaceholder: 'ex. 1-2 meses',
        message: 'Mensaxe',
        messagePlaceholder:
          'Describe os obxectivos e necesidades do teu proxecto',
        submitButton: 'Enviar mensaxe',
      },
    },
  };

  constructor(private fb: FormBuilder, private langService: LanguageService) {
    this.devForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      type: ['web', Validators.required],
      budget: [''],
      timeline: [''],
      message: ['', Validators.required],
    });

    this.langService.lang$.subscribe((l) => {
      this.lang = l;
    });
  }

  onSubmit() {
    if (this.devForm.valid) {
      const formData = this.devForm.value;
      console.log('Send this data to API or email service:', formData);
      // You can integrate EmailJS, Formspree, or your API here
    }
  }
}
