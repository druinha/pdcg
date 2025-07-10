import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  lang: 'en' | 'es' | 'gl' = 'en';
  langs: ('en' | 'es' | 'gl')[] = ['en', 'es', 'gl'];

  isOpen = false;
  showLangMenu = false;

  navLabels = {
    en: [
      'Home',
      'Services',
      'Tech Stack',
      'Pricing',
      'Projects',
      'Consulting',
      'Contact',
    ],
    es: [
      'Inicio',
      'Servicios',
      'Tecnologías',
      'Precios',
      'Proyectos',
      'Consultoría',
      'Contacto',
    ],
    gl: [
      'Inicio',
      'Servizos',
      'Tecnoloxías',
      'Prezos',
      'Proxectos',
      'Consultoría',
      'Contacto',
    ],
  };

  switchLang(lang: 'en' | 'es' | 'gl') {
    this.lang = lang;
  }

  scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth' });
    this.isOpen = false;
  }

  getSectionId(label: string): string {
    return label.toLowerCase().replace(/\s+/g, '-');
  }

  toggleLangMenu() {
    this.showLangMenu = !this.showLangMenu;
  }
}
