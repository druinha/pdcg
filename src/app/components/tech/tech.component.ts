import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-tech',
  imports: [CommonModule],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.scss',
})
export class TechComponent {
  techCategories = [
    {
      category: 'Mobile Development',
      technologies: [
        'Ionic',
        'Capacitor',
        'Cordova',
        'Android Studio',
        'Xcode',
        'PWA',
      ],
      color: 'from-blue-500 to-orange-500',
    },
    {
      category: 'Design & Prototyping',
      technologies: [
        'Figma',
        'UI/UX Design',
        'Wireframing',
        'Prototyping',
        'Design Systems',
      ],
      color: 'from-orange-500 to-yellow-500',
    },
    {
      category: 'Frontend Development',
      technologies: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Bootstrap',
      ],
      color: 'from-blue-500 to-cyan-400',
    },
    {
      category: 'Backend & Database',
      technologies: [
        'Firebase',
        'MySQL',
        'Redis',
        'Neo4j',
        'RESTful APIs',
        'Node.js',
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      category: 'Cloud & Deployment',
      technologies: [
        'Google Cloud',
        'App Store Connect',
        'Google Play Console',
        'Firebase Hosting',
      ],
      color: 'from-blue-500 to-indigo-500',
    },
    {
      category: 'Development Tools',
      technologies: [
        'Android Studio',
        'Xcode',
        'Apple Developer Console',
        'Google Developer Console',
      ],
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  workflow = [
    'Figma Design',
    'Angular/Ionic Development',
    'Capacitor Integration',
    'Native Testing',
    'App Store Deployment',
    'Cloud Hosting',
  ];

  lang: 'en' | 'es' | 'gl' = 'en';

  translations = {
    en: {
      sectionTitle: {
        main: 'Tech',
        highlight: 'Stack',
      },
      description:
        'Modern technologies and tools specialized for hybrid mobile app development and cross-platform solutions',
      categories: [
        {
          category: 'Mobile Development',
          color: 'from-blue-500 to-orange-500',
          technologies: [
            'Ionic',
            'Capacitor',
            'Cordova',
            'Android Studio',
            'Xcode',
            'PWA',
          ],
        },
        {
          category: 'Design & Prototyping',
          color: 'from-orange-500 to-yellow-500',
          technologies: [
            'Figma',
            'UI/UX Design',
            'Wireframing',
            'Prototyping',
            'Design Systems',
          ],
        },
        {
          category: 'Frontend Development',
          color: 'from-blue-500 to-cyan-400',
          technologies: [
            'Angular',
            'TypeScript',
            'JavaScript',
            'HTML5',
            'CSS3',
            'Tailwind CSS',
            'Bootstrap',
          ],
        },
        {
          category: 'Backend & Database',
          color: 'from-orange-500 to-red-500',
          technologies: [
            'Firebase',
            'MySQL',
            'Redis',
            'Neo4j',
            'RESTful APIs',
            'Node.js',
          ],
        },
        {
          category: 'Cloud & Deployment',
          color: 'from-blue-500 to-indigo-500',
          technologies: [
            'Google Cloud',
            'App Store Connect',
            'Google Play Console',
            'Firebase Hosting',
          ],
        },
        {
          category: 'Development Tools',
          color: 'from-yellow-500 to-orange-500',
          technologies: [
            'Android Studio',
            'Xcode',
            'Apple Developer Console',
            'Google Developer Console',
          ],
        },
      ],
    },
    es: {
      sectionTitle: {
        main: 'Tecnologías',
        highlight: 'Utilizadas',
      },
      description:
        'Tecnologías modernas y herramientas especializadas en desarrollo de apps móviles híbridas y soluciones multiplataforma',
      categories: [
        {
          category: 'Desarrollo Móvil',
          color: 'from-blue-500 to-orange-500',
          technologies: [
            'Ionic',
            'Capacitor',
            'Cordova',
            'Android Studio',
            'Xcode',
            'PWA',
          ],
        },
        {
          category: 'Diseño y Prototipado',
          color: 'from-orange-500 to-yellow-500',
          technologies: [
            'Figma',
            'UI/UX Design',
            'Wireframing',
            'Prototyping',
            'Design Systems',
          ],
        },
        {
          category: 'Desarrollo Frontend',
          color: 'from-blue-500 to-cyan-400',
          technologies: [
            'Angular',
            'TypeScript',
            'JavaScript',
            'HTML5',
            'CSS3',
            'Tailwind CSS',
            'Bootstrap',
          ],
        },
        {
          category: 'Backend y Bases de Datos',
          color: 'from-orange-500 to-red-500',
          technologies: [
            'Firebase',
            'MySQL',
            'Redis',
            'Neo4j',
            'RESTful APIs',
            'Node.js',
          ],
        },
        {
          category: 'Cloud y Lanzamiento',
          color: 'from-blue-500 to-indigo-500',
          technologies: [
            'Google Cloud',
            'App Store Connect',
            'Google Play Console',
            'Firebase Hosting',
          ],
        },
        {
          category: 'Herramientas de Desarrollo',
          color: 'from-yellow-500 to-orange-500',
          technologies: [
            'Android Studio',
            'Xcode',
            'Apple Developer Console',
            'Google Developer Console',
          ],
        },
      ],
    },
    gl: {
      sectionTitle: {
        main: 'Tecnoloxías',
        highlight: 'Empregadas',
      },
      description:
        'Tecnoloxías modernas e ferramentas especializadas en desenvolvemento de apps móbiles híbridas e solucións multiplataforma',
      categories: [
        {
          category: 'Desenvolvemento Móbil',
          color: 'from-blue-500 to-orange-500',
          technologies: [
            'Ionic',
            'Capacitor',
            'Cordova',
            'Android Studio',
            'Xcode',
            'PWA',
          ],
        },
        {
          category: 'Deseño e Prototipado',
          color: 'from-orange-500 to-yellow-500',
          technologies: [
            'Figma',
            'UI/UX Design',
            'Wireframing',
            'Prototyping',
            'Design Systems',
          ],
        },
        {
          category: 'Desenvolvemento Frontend',
          color: 'from-blue-500 to-cyan-400',
          technologies: [
            'Angular',
            'TypeScript',
            'JavaScript',
            'HTML5',
            'CSS3',
            'Tailwind CSS',
            'Bootstrap',
          ],
        },
        {
          category: 'Backend e Bases de Datos',
          color: 'from-orange-500 to-red-500',
          technologies: [
            'Firebase',
            'MySQL',
            'Redis',
            'Neo4j',
            'RESTful APIs',
            'Node.js',
          ],
        },
        {
          category: 'Cloud e Lanzamento',
          color: 'from-blue-500 to-indigo-500',
          technologies: [
            'Google Cloud',
            'App Store Connect',
            'Google Play Console',
            'Firebase Hosting',
          ],
        },
        {
          category: 'Ferramentas de Desenvolvemento',
          color: 'from-yellow-500 to-orange-500',
          technologies: [
            'Android Studio',
            'Xcode',
            'Apple Developer Console',
            'Google Developer Console',
          ],
        },
      ],
    },
  };

  constructor(private langService: LanguageService) {
    this.langService.lang$.subscribe((l) => {
      this.lang = l;
    });
  }
}
