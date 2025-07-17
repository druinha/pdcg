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
  selector: 'app-contact-consulting',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-consulting.component.html',
  styleUrl: './contact-consulting.component.scss',
})
export class ContactConsultingComponent {
  lang: 'en' | 'es' | 'gl' = 'en';
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
    },
  };

  constructor(private fb: FormBuilder, private langService: LanguageService) {
    this.consultingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      service: ['strategy', Validators.required],
      company: [''],
      message: ['', Validators.required],
    });

    this.langService.lang$.subscribe((l) => {
      this.lang = l;
    });
  }

  onSubmit() {
    if (this.consultingForm.valid) {
      console.log(this.consultingForm.value);
    }
  }
}
