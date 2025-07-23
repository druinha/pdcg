import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-cookies-policy',
  imports: [CommonModule],
  templateUrl: './cookies-policy.component.html',
  styleUrl: './cookies-policy.component.scss'
})
export class CookiesPolicyComponent {
  lang : 'en' | 'es' | 'gl' = 'en';

  translations = {
    en: {
      title: '🍪 Cookies Policy – PDCG Solutions',
      updated: 'Last updated: 19 July 2025',
      introTitle: '1. Introduction',
      introText: `This Cookies Policy explains how PDCG Solutions ("we", "us", or "our") uses cookies and similar technologies on our website https://pdcgsolutions.com. By using our website, you consent to our use of cookies in accordance with this policy.`,
      whatCookies: '2. What Are Cookies?',
      whatCookiesText: `Cookies are small text files placed on your device when you visit a website. They help websites function and provide useful info to owners.`,
      typesTitle: '3. Types of Cookies We Use',
      typesList: [
        'Essential cookies: Necessary for website functionality (e.g., navigation, forms).',
        'Analytics cookies: Help us understand user interaction (e.g., Google Analytics).',
        'Functionality cookies: Remember your preferences/settings.',
        'Third-party cookies: Set by services like YouTube or Google Maps.'
      ],
      consentTitle: '3a. Consent and Control',
      consentText: `We only use non-essential cookies (analytics, marketing) with your explicit consent via the cookie banner. You can change your preferences anytime.`,
      howUseTitle: '4. How We Use Cookies',
      howUseList: [
        'Ensure site functionality',
        'Improve performance/user experience',
        'Analyze usage',
        'Support social features or embeds'
      ],
      managingTitle: '5. Managing Cookies',
      managingText: `You can accept or refuse cookies. Most browsers let you control them in settings.`,
      managingOptions: [
        'Delete stored cookies',
        'Block future cookies'
      ],
      managingNote: '⚠ Disabling cookies may affect functionality.',
      browserInstructions: 'Browser-specific instructions:',
      browsers: ['Google Chrome', 'Mozilla Firefox', 'Safari', 'Microsoft Edge'],
      thirdPartyTitle: '6. Third-Party Services',
      thirdPartyText: `We use services like Google Analytics or YouTube which set their own cookies governed by their own policies.`,
      listTitle: '7. List of Cookies We Use',
      contactTitle: '8. Contact Us',
      contactText: `If you have any questions about our Cookies Policy, contact us at:`
    },

    es: {
      title: '🍪 Política de Cookies – PDCG Solutions',
      updated: 'Última actualización: 19 de julio de 2025',
      introTitle: '1. Introducción',
      introText: `Esta Política de Cookies explica cómo PDCG Solutions ("nosotros",
      "nuestro") utiliza cookies y tecnologías similares en nuestro sitio web https://pdcgsolutions.com. Al usar nuestro sitio, consiente el uso de cookies de acuerdo con esta política.`,
      whatCookies: '2. ¿Qué son las Cookies?',
      whatCookiesText: `Las cookies son pequeños archivos de texto que se colocan en su dispositivo cuando visita un sitio web. Ayudan a que los sitios web funcionen y proporcionan información útil a los propietarios.`,
      typesTitle: '3. Tipos de Cookies que Usamos',
      typesList: [
        'Cookies esenciales: Necesarias para la funcionalidad del sitio (p. ej., navegación, formularios).',
        'Cookies de análisis: Nos ayudan a entender la interacción del usuario (p. ej., Google Analytics).',
        'Cookies de funcionalidad: Recuerdan sus preferencias/configuraciones.',
        'Cookies de terceros: Establecidas por servicios como YouTube o Google Maps.'
      ],
      consentTitle: '3a. Consentimiento y Control',
      consentText: `Solo usamos cookies no esenciales (análisis, marketing) con su consentimiento explícito a través del banner de cookies. Puede cambiar sus preferencias en cualquier momento.`,
      howUseTitle: '4. Cómo Usamos las Cookies',
      howUseList: [
        'Asegurar la funcionalidad del sitio',
        'Mejorar el rendimiento/experiencia del usuario',
        'Analizar el uso',
        'Soportar funciones sociales o incrustaciones'
      ],
      managingTitle: '5. Gestión de Cookies',
      managingText: `Puede aceptar o rechazar cookies. La mayoría de los navegadores le permiten controlarlas en la configuración.`,
      managingOptions: [
        'Eliminar cookies almacenadas',
        'Bloquear cookies futuras'
      ],
      managingNote: '⚠ Deshabilitar cookies puede afectar la funcionalidad.',
      browserInstructions: 'Instrucciones específicas del navegador:',
      browsers: ['Google Chrome', 'Mozilla Firefox', 'Safari', 'Microsoft Edge'],
      thirdPartyTitle: '6. Servicios de Terceros',
      thirdPartyText: `Utilizamos servicios como Google Analytics o YouTube que establecen sus propias cookies regidas por sus propias políticas.`,
      listTitle: '7. Lista de Cookies que Usamos',
      contactTitle: '8. Contáctenos',
      contactText: `Si tiene alguna pregunta sobre nuestra Política de Cookies, contáctenos en:`
    },
    gl: {
      title: '🍪 Política de Cookies – PDCG Solutions',
      updated: 'Última actualización: 19 de xullo de 2025',
      introTitle: '1. Introdución',
      introText: `Esta Política de Cookies explica como PDCG Solutions ("nós", "nosos") usa cookies e tecnoloxías similares no noso sitio web https://pdcgsolutions.com. Ao usar o noso sitio, consinte o uso de cookies segundo esta política.`,
      whatCookies: '2. Que son as Cookies?',
      whatCookiesText: `As cookies son pequenos ficheiros de texto que se colocan no seu dispositivo cando visita un sitio web. Axudan aos sitios web a funcionar e proporcionan información útil aos propietarios.`,
      typesTitle: '3. Tipos de Cookies que Usamos',
      typesList: [
        'Cookies esenciais: Necesarias para a funcionalidade do sitio (p. ex., navegación, formularios).',
        'Cookies de análise: Axúdanos a entender a interacción do usuario (p. ex., Google Analytics).',
        'Cookies de funcionalidade: Recordan as súas preferencias/configuracións.',
        'Cookies de terceiros: Estabelecidas por servizos como YouTube ou Google Maps.'
      ],
      consentTitle: '3a. Consentimento e Control',
      consentText: `Só usamos cookies non esenciais (análise, marketing) co seu consentimento explícito a través do banner de cookies. Pode cambiar as súas preferencias en calquera momento.`,
      howUseTitle: '4. Como Usamos as Cookies',
      howUseList: [
        'Asegurar a funcionalidade do sitio',
        'Mellorar o rendemento/experiencia do usuario',
        'Analizar o uso',
        'Soportar funcións sociais ou incrustacións'
      ],
      managingTitle: '5. Xestión de Cookies',
      managingText: `Pode aceptar ou rexeitar cookies. A maioría dos navegadores permiten controlalas nas súas configuracións.`,
      managingOptions: [
        'Eliminar cookies almacenadas',
        'Bloquear cookies futuras'
      ],
      managingNote: '⚠ Desactivar cookies pode afectar a funcionalidade.',
      browserInstructions: 'Instrucións específicas do navegador:',
      browsers: ['Google Chrome', 'Mozilla Firefox', 'Safari', 'Microsoft Edge'],
      thirdPartyTitle: '6. Servizos de Terceiros',
      thirdPartyText: `Usamos servizos como Google Analytics ou YouTube que establecen as súas propias cookies rexidas polas súas propias políticas.`,
      listTitle: '7. Lista de Cookies que Usamos',
      contactTitle: '8. Contáctenos',
      contactText: `Se ten algunha pregunta sobre a nosa Política de Cookies, contáctenos en:`
    }
  }


  constructor(private langService: LanguageService) {
    this.langService.lang$.subscribe((l) => {
      this.lang = l;
    });
  }

}
