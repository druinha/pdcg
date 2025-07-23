import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  lang: 'en' | 'es' | 'gl' = 'en';

  translations = {
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: July 23, 2025',
    introTitle: 'Your Privacy Matters',
    introText: 'At PDCG Solutions, we are committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information when you visit our website.',
    infoTitle: 'Information We Collect',
    infoList: [
      'Contact details (name, email) if you fill out a form',
      'Technical information (IP address, browser type) for analytics purposes'
    ],
    useTitle: 'How We Use Your Data',
    useList: [
      'To respond to your inquiries',
      'To improve our website and services',
      'To send communications if you request them'
    ],
    shareTitle: 'Data Sharing',
    shareText: 'We do not sell or rent your data. We may share data with trusted service providers who help us operate our website.',
    rightsTitle: 'Your Rights',
    rightsList: [
      'Access your data',
      'Correct or delete your data',
      'Withdraw consent'
    ],
    contactTitle: 'Contact Us',
    contactText: 'If you have questions about this policy, email us at',
  },
  es: {
    title: 'Política de Privacidad',
    updated: 'Última actualización: 23 de julio de 2025',
    introTitle: 'Tu privacidad es importante',
    introText: 'En PDCG Solutions, nos tomamos muy en serio tu privacidad. Esta política explica cómo recopilamos, usamos y protegemos tu información personal al visitar nuestro sitio web.',
    infoTitle: 'Información que Recopilamos',
    infoList: [
      'Datos de contacto (nombre, correo electrónico) si completas un formulario',
      'Información técnica (dirección IP, tipo de navegador) con fines analíticos'
    ],
    useTitle: 'Cómo Usamos tus Datos',
    useList: [
      'Para responder a tus consultas',
      'Para mejorar nuestro sitio web y servicios',
      'Para enviar comunicaciones si lo solicitas'
    ],
    shareTitle: 'Compartir Datos',
    shareText: 'No vendemos ni alquilamos tu información. Podemos compartirla con proveedores de servicios confiables que nos ayudan a operar el sitio.',
    rightsTitle: 'Tus Derechos',
    rightsList: [
      'Acceder a tus datos',
      'Corregir o eliminar tu información',
      'Retirar tu consentimiento'
    ],
    contactTitle: 'Contacto',
    contactText: 'Si tienes dudas sobre esta política, escríbenos a',
  },
  gl: {
    title: 'Política de Privacidade',
    updated: 'Última actualización: 23 de xullo de 2025',
    introTitle: 'A túa privacidade importa',
    introText: 'En PDCG Solutions, comprometémonos a protexer a túa privacidade. Esta política explica como recollemos, usamos e protexemos a túa información persoal cando visitas o noso sitio web.',
    infoTitle: 'Información que Recollemos',
    infoList: [
      'Datos de contacto (nome, correo electrónico) se cobre un formulario',
      'Información técnica (enderezo IP, tipo de navegador) con fins analíticos'
    ],
    useTitle: 'Como Usamos os teus Datos',
    useList: [
      'Para responder ás túas consultas',
      'Para mellorar o noso sitio e servizos',
      'Para enviar comunicacións se así o solicitas'
    ],
    shareTitle: 'Compartición de Datos',
    shareText: 'Non vendemos nin alugamos a túa información. Podemos compartila con provedores de confianza que nos axudan a operar o sitio.',
    rightsTitle: 'Os teus Dereitos',
    rightsList: [
      'Acceder á túa información',
      'Corrixir ou eliminar os teus datos',
      'Retirar o teu consentimento'
    ],
    contactTitle: 'Contacto',
    contactText: 'Se tes dúbidas sobre esta política, podes escribirnos a',
  }
};
  constructor(
    private langService: LanguageService
  ) 
  {
    this.langService.lang$.subscribe((l) => {
      this.lang = l;
    });
  }

}
