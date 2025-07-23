import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  lang: 'en' | 'es' | 'gl' = 'en';

  translations = {
    en: {
      companyDescription: 'Proxectos, Desenvolvemento e Código da Galiza',
      contactTitle: 'Contact',
      linksTitle: 'Links',
      careers: 'Careers',
      projects: 'Projects',
      privacyPolicy: 'Privacy Policy',
      allRightsReserved: 'All rights reserved.',
      cookiesPolicy: 'Cookies Policy',
      footerCookiesText: 'You can review or update your cookie preferences at any time by visiting our.',
      footerCookiesLink: 'Cookie Settings',
      footerPage: 'page'
    },
    es: {
      companyDescription: 'Proyectos, Desarrollo y Código de Galicia',
      contactTitle: 'Contacto',
      linksTitle: 'Enlaces',
      careers: 'Empleo',
      projects: 'Proyectos',
      privacyPolicy: 'Política de Privacidad',
      allRightsReserved: 'Todos los derechos reservados.',
      cookiesPolicy: 'Política de Cookies',
      footerCookiesText: 'Puedes revisar o actualizar tus preferencias de cookies en cualquier momento visitando nuestra.',
      footerCookiesLink: 'Configuración de Cookies',
      footerPage: 'página'
    },
    gl: {
      companyDescription: 'Proxectos, Desenvolvemento e Código da Galiza',
      contactTitle: 'Contacto',
      linksTitle: 'Ligazóns',
      careers: 'Emprego',
      projects: 'Proxectos',
      privacyPolicy: 'Política de Privacidade',
      allRightsReserved: 'Todos os dereitos reservados.',
      cookiesPolicy: 'Política de Cookies',
      footerCookiesText: 'Podes revisar ou actualizar as túas preferencias de cookies en calquera momento visitando a nosa.',
      footerCookiesLink: 'Configuración de Cookies',
      footerPage: 'páxina'
    },
  };

  constructor(private langService: LanguageService) {
    this.langService.lang$.subscribe((l) => {
      this.lang = l;
    });
  }
}
