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


@Component({
  selector: 'app-contact-consulting',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-consulting.component.html',
  styleUrl: './contact-consulting.component.scss',
})
export class ContactConsultingComponent {

  lang: 'en' | 'es' | 'gl' = 'en';

  isLoading = false;
  showSuccessModal = false;
  consultingForm: FormGroup;

  translations = {
    en: {
      consultingForm: {
        title: 'Consulting Inquiry',
        fullName: 'Full Name',
        email: 'Email',
        consultingType: 'Type of Consulting',
        consultingTypeOptions: {
          strategy: 'Strategy',
          branding: 'Branding',
          tech: 'Technical Audit',
        },
        company: 'Company (optional)',
        message: 'Message',
        submitButton: 'Send Inquiry',
      },
      modal: {
        title: 'Inquiry Sent!',
        message: 'Thank you for your inquiry. We will get back to you soon. Please check your spam folder just in case.',
        closeButton: 'Close',
      },
      loading: 'Sending your inquiry...'
    },
    es: {
      consultingForm: {
        title: 'Consulta de Consultoría',
        fullName: 'Nombre completo',
        email: 'Correo electrónico',
        consultingType: 'Tipo de Consultoría',
        consultingTypeOptions: {
          strategy: 'Estrategia',
          branding: 'Branding',
          tech: 'Auditoría Técnica',
        },
        company: 'Empresa (opcional)',
        message: 'Mensaje',
        submitButton: 'Enviar Consulta',
      },
      modal: {
        title: '¡Consulta enviada!',
        message: 'Gracias por tu consulta. Nos pondremos en contacto contigo pronto. Revisa tu carpeta de spam por si acaso.',
        closeButton: 'Cerrar',
      },
      loading: 'Enviando tu consulta...'
    },
    gl: {
      consultingForm: {
        title: 'Consulta de Consultoría',
        fullName: 'Nome completo',
        email: 'Correo electrónico',
        consultingType: 'Tipo de Consultoría',
        consultingTypeOptions: {
          strategy: 'Estratexia',
          branding: 'Branding',
          tech: 'Auditoría Técnica',
        },
        company: 'Empresa (opcional)',
        message: 'Mensaxe',
        submitButton: 'Enviar Consulta',
      },
      modal: {
        title: '¡Consulta enviada!',
        message: 'Grazas pola túa consulta. Póñome en contacto contigo pronto. Revisa a túa carpeta de spam por se acaso.',
        closeButton: 'Pechar',
      },
      loading: 'Enviando a túa consulta...'
    },
  };

  constructor(private fb: FormBuilder, private langService: LanguageService) {
    this.consultingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      service: ['strategy', Validators.required],
      type: ['Consulting'],
      company: [''],
      message: ['', Validators.required],
    });

    this.langService.lang$.subscribe((l) => {
      this.lang = l;
    });
  }

 onSubmit() {
  if (this.consultingForm.valid) {
    this.isLoading = true;

    const formData = this.consultingForm.value;

    emailjs
      .send(
        'service_0hwujn8', // ✅ Replace with your actual EmailJS service ID
        'template_773tnit', // ✅ Use a dedicated template for consulting, if needed
        {
          name: formData.name,
          email: formData.email,
          type: formData.type,
          company: formData.company || 'Not specified',
          message: formData.message,
        },
        'U5iw7AFZNS4j7Q1dD' // ✅ Your EmailJS public key
      )
      .then(() => {
        this.isLoading = false;
        this.showSuccessModal = true;
        this.consultingForm.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        this.isLoading = false;
        alert('Oops! Something went wrong. Please try again later.');
      });
  }
}

  closeModal() {
  this.showSuccessModal = false;
}
}
