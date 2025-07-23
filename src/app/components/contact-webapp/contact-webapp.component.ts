import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import emailjs from '@emailjs/browser';

type ProjectType = 'web' | 'app' | 'both';

interface DevFormData {
  name: string;
  email: string;
  type: ProjectType;
  budget?: string;
  timeline?: string;
  message: string;
}

@Component({
  selector: 'app-contact-webapp',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-webapp.component.html',
  styleUrl: './contact-webapp.component.scss',
})
export class ContactWebappComponent {

  lang: 'en' | 'es' | 'gl' = 'en';

  showSuccessModal = false;

  devForm: FormGroup;
  isLoading = false;

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
      modal: {
  title: 'Message Sent!',
  message: 'Thank you for your message. We will contact you shortly. Please check your spam folder just in case.',
  closeButton: 'Close',
},
loading: 'Sending your message...'

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
      modal: {
      title: '¡Mensaje enviado!',
      message: 'Gracias por tu mensaje. Nos pondremos en contacto contigo pronto. Revisa tu carpeta de spam por si acaso.',
      closeButton: 'Cerrar',
    },
    loading: 'Enviando tu mensaje...'


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
      modal: {
  title: '¡Mensaje enviado!',
  message: 'Gracias por tu mensaje. Nos pondremos en contacto contigo pronto. Revisa tu carpeta de spam por si acaso.',
  closeButton: 'Cerrar',
},
loading: 'Enviando a túa mensaxe...'

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
        this.isLoading = true;
      const formData = this.devForm.value as DevFormData;

      emailjs
        .send(
          'service_0hwujn8', // ✅ Replace with your actual Service ID
          'template_773tnit', // ✅ Replace with your actual Template ID
          {
            name: formData.name,
            email: formData.email,
            type: this.translations[this.lang].contactForm.projectTypeOptions[
              formData.type
            ],
            budget: formData.budget || 'Not specified',
            timeline: formData.timeline || 'Not specified',
            message: formData.message,
          },
          'U5iw7AFZNS4j7Q1dD' // ✅ Replace with your EmailJS User ID (Public Key)
        )
        .then(() => {
          this.isLoading = false;
          this.showSuccessModal = true;
          this.devForm.reset(); // ✅ Clear form after successful send
        })
        .catch((error) => {
          console.error('EmailJS error:', error);
          alert('Oops! Something went wrong. Please try again later.');
        });
    }
  }

  closeModal() {
  this.showSuccessModal = false;
}
}
