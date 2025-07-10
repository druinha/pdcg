import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  lang: 'en' | 'es' | 'gl' = 'en';

  projects = [
    {
      title: 'SocialVibes App',
      description:
        'A social media and event platform built for real-time interaction, content sharing, and community engagement.',
      image: '../../../assets/companiesImages/SV3.png',
      tech: ['Ionic', 'Angular', 'Python', 'Firebase', 'Redis', 'Neo4j', 'GCP'],
      category: 'Mobile & Web App',
      live: 'https://socialvibes.io/', // or your production URL
      code: '', // or GitHub URL
    },
    {
      title: 'IBDi Medical App',
      description:
        'A clinical support and tracking app for patients with IBD, used in a medical research study.',
      image: '../../../assets/companiesImages/ibdi.png',
      tech: ['Ionic', 'Angular', 'Python', 'Firebase', 'GCP'],
      category: 'Healthcare App',
      live: 'https://ibdi.se/',
      code: '',
    },
    {
      title: 'Niquita Rengøring Website',
      description:
        'A WordPress-based website for a professional cleaning company with service pages and contact forms.',
      image: '../../../assets/companiesImages/niquita.png',
      tech: ['WordPress', 'PHP', 'MySQL', 'SEO'],
      category: 'Web Development',
      live: 'https://niquitta.dk/',
      code: '',
    },
    {
      title: 'Happy Feet Rengøring',
      description:
        'A modern Angular website for a Danish cleaning service company, optimized for performance and mobile.',
      image: '../../../assets/images/under_construction.jpg',
      tech: ['Angular', 'TypeScript', 'Tailwind', 'Firebase Hosting'],
      category: 'Web Application',
      live: '',
      code: '',
    },
  ];

  translations = {
    en: {
      sectionTitle: 'Featured',
      sectionHighlight: 'Projects',
      sectionDescription:
        "A showcase of real-world apps and websites I've developed for clients across tech, healthcare, and services.",
      visitPage: 'Visit',
      code: 'Code',
    },
    es: {
      sectionTitle: 'Destacados',
      sectionHighlight: 'Proyectos',
      sectionDescription:
        'Una muestra de aplicaciones y sitios web reales que he desarrollado para clientes en tecnología, salud y servicios.',
      visitPage: 'Visitar',
      code: 'Código',
    },
    gl: {
      sectionTitle: 'Destacados',
      sectionHighlight: 'Proxectos',
      sectionDescription:
        'Unha mostra de aplicacións e sitios web reais que desenvolvín para clientes en tecnoloxía, saúde e servizos.',
      visitPage: 'Visitar',
      code: 'Código',
    },
  };

  constructor(private langService: LanguageService) {
    this.langService.lang$.subscribe((l) => {
      this.lang = l;
    });
  }
}
