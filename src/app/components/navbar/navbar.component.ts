import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

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

  labelToIdMap: { [key: string]: string } = {
    Home: 'home',
    Services: 'services',
    'Tech Stack': 'tech-stack',
    Pricing: 'pricing',
    Projects: 'projects',
    Consulting: 'consulting',
    Contact: 'contact',

    // Spanish
    Inicio: 'home',
    Servicios: 'services',
    Tecnologías: 'tech-stack',
    Precios: 'pricing',
    Proyectos: 'projects',
    Consultoría: 'consulting',
    Contacto: 'contact',

    // Galician
    Servizos: 'services',
    Tecnoloxías: 'tech-stack',
    Prezos: 'pricing',
    Proxectos: 'projects',
  };

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

  constructor(
    private langService: LanguageService,
    private router: Router,
    private location: Location
  ) {
    this.langService.lang$.subscribe((l) => {
      this.lang = l;
      this.showLangMenu = false;
      this.isOpen = false;
    });
  }

  scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth' });
    this.isOpen = false;
    this.showLangMenu = false;
  }

  getSectionId(label: string): string {
    return this.labelToIdMap[label] || label.toLowerCase().replace(/\s+/g, '-');
  }

  toggleLangMenu() {
    this.showLangMenu = !this.showLangMenu;
  }

  switchLang(newLang: 'en' | 'es' | 'gl') {
    if (newLang !== this.lang) {
      this.langService.setLang(newLang);
      this.showLangMenu = false;
      this.isOpen = false;
    }
  }

  navigateToHome() {
    const currentPath = this.location.path();
    if (currentPath === '' || currentPath === '/' || currentPath === '/#home') {
      this.scrollToSection('home');
    } else {
      this.router.navigate(['/']).then(() => {
        this.scrollToSection('home');
      });
    }
  }
}
