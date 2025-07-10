import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-my-services',
  imports: [CommonModule],
  templateUrl: './my-services.component.html',
  styleUrl: './my-services.component.scss',
})
export class MyServicesComponent {
  lang: 'en' | 'es' | 'gl' = 'en';

  services = [
    {
      icon: '📱',
      title: 'Hybrid Mobile App Development',
      description:
        'Cross-platform mobile apps with native performance using Ionic, Capacitor, and Cordova. One codebase, multiple platforms.',
      features: [
        'iOS & Android',
        'Single Codebase',
        'Native Performance',
        'Cost-Effective',
      ],
      color: 'blue-orange',
    },
    {
      icon: '💻',
      title: 'Angular Applications',
      description:
        'Enterprise-grade Angular applications with modern architecture, perfect for web and mobile platforms.',
      features: [
        'SPA Development',
        'TypeScript',
        'Material Design',
        'PWA Ready',
      ],
      color: 'orange-yellow',
    },
    {
      icon: '⚡',
      title: 'UI/UX Design & Prototyping',
      description:
        'Complete design solutions using Figma for wireframes, prototypes, and high-fidelity designs before development.',
      features: [
        'Figma Designs',
        'User Experience',
        'Prototyping',
        'Design Systems',
      ],
      color: 'blue-cyan',
    },
    {
      icon: '🗄️',
      title: 'Backend Development',
      description:
        'Robust backend solutions with modern databases and cloud infrastructure for your mobile and web apps.',
      features: [
        'MySQL & Neo4j',
        'Firebase Integration',
        'Redis Caching',
        'RESTful APIs',
      ],
      color: 'orange-red',
    },
    {
      icon: '☁️',
      title: 'Cloud Deployment',
      description:
        'Scalable app deployment and management using Google Cloud Platform with continuous integration.',
      features: [
        'GCP Integration',
        'App Store Deployment',
        'Performance Monitoring',
        'Auto Scaling',
      ],
      color: 'blue-indigo',
    },
    {
      icon: '🌐',
      title: 'WordPress Development',
      description:
        'Budget-friendly WordPress websites and e-commerce solutions for clients who need quick, cost-effective solutions.',
      features: [
        'Custom Themes',
        'WooCommerce',
        'SEO Optimization',
        'Budget-Friendly',
      ],
      color: 'yellow-orange',
    },
  ];

  translations = {
    en: {
      sectionTitle: {
        main: 'App Development',
        highlight: 'Services',
      },
      description:
        'Specialized in hybrid mobile app development and modern web applications. From design to deployment, we create cross-platform solutions that work everywhere.',
      whyChoose: 'Why Choose',
      whyChooseHighlight: 'Hybrid Apps',
      benefits: [
        {
          icon: '💰',
          title: 'Cost Effective',
          desc: 'One codebase for multiple platforms reduces development time and costs by up to 60%',
        },
        {
          icon: '⚡',
          title: 'Faster Development',
          desc: 'Rapid deployment across iOS and Android with shared code and faster updates',
        },
        {
          icon: '🔧',
          title: 'Easy Maintenance',
          desc: 'Single codebase means easier updates, bug fixes, and feature additions',
        },
      ],
      services: [
        {
          icon: '📱',
          title: 'Hybrid Mobile App Development',
          description:
            'Cross-platform mobile apps with native performance using Ionic, Capacitor, and Cordova. One codebase, multiple platforms.',
          features: [
            'iOS & Android',
            'Single Codebase',
            'Native Performance',
            'Cost-Effective',
          ],
          color: 'blue-orange',
        },
        {
          icon: '💻',
          title: 'Angular Applications',
          description:
            'Enterprise-grade Angular applications with modern architecture, perfect for web and mobile platforms.',
          features: [
            'SPA Development',
            'TypeScript',
            'Material Design',
            'PWA Ready',
          ],
          color: 'orange-yellow',
        },
        {
          icon: '⚡',
          title: 'UI/UX Design & Prototyping',
          description:
            'Complete design solutions using Figma for wireframes, prototypes, and high-fidelity designs before development.',
          features: [
            'Figma Designs',
            'User Experience',
            'Prototyping',
            'Design Systems',
          ],
          color: 'blue-cyan',
        },
        {
          icon: '🗄️',
          title: 'Backend Development',
          description:
            'Robust backend solutions with modern databases and cloud infrastructure for your mobile and web apps.',
          features: [
            'MySQL',
            'Neo4j',
            'Firebase Integration',
            'Redis Caching',
            'RESTful APIs',
          ],
          color: 'orange-red',
        },
        {
          icon: '☁️',
          title: 'Cloud Deployment',
          description:
            'Scalable app deployment and management using Google Cloud Platform with continuous integration.',
          features: [
            'GCP Integration',
            'App Store Deployment',
            'Performance Monitoring',
            'Auto Scaling',
          ],
          color: 'blue-indigo',
        },
        {
          icon: '🌐',
          title: 'WordPress Development',
          description:
            'Budget-friendly WordPress websites and e-commerce solutions for clients who need quick, cost-effective solutions.',
          features: [
            'Custom Themes',
            'WooCommerce',
            'SEO Optimization',
            'Budget-Friendly',
          ],
          color: 'yellow-orange',
        },
      ],
    },
    es: {
      sectionTitle: {
        main: 'Desarrollo de Apps',
        highlight: 'Servicios',
      },
      description:
        'Especializados en desarrollo de aplicaciones móviles híbridas y aplicaciones web modernas. Desde el diseño hasta el lanzamiento, creamos soluciones multiplataforma que funcionan en todas partes.',
      whyChoose: 'Por qué elegir',
      whyChooseHighlight: 'Apps Híbridas',
      benefits: [
        {
          icon: '💰',
          title: 'Económico',
          desc: 'Una base de código única para múltiples plataformas reduce el tiempo y costos de desarrollo hasta en un 60%',
        },
        {
          icon: '⚡',
          title: 'Desarrollo Rápido',
          desc: 'Lanzamiento rápido en iOS y Android con código compartido y actualizaciones más veloces',
        },
        {
          icon: '🔧',
          title: 'Mantenimiento Fácil',
          desc: 'Una base de código única facilita actualizaciones, corrección de errores y mejoras de funcionalidades',
        },
      ],
      services: [
        {
          icon: '📱',
          title: 'Desarrollo de Apps Móviles Híbridas',
          description:
            'Apps móviles multiplataforma con rendimiento nativo usando Ionic, Capacitor y Cordova. Una base de código, múltiples plataformas.',
          features: [
            'iOS y Android',
            'Base de Código Única',
            'Rendimiento Nativo',
            'Económico',
          ],
          color: 'blue-orange',
        },
        {
          icon: '💻',
          title: 'Aplicaciones Angular',
          description:
            'Aplicaciones Angular de nivel empresarial con arquitectura moderna, perfectas para web y plataformas móviles.',
          features: [
            'Desarrollo SPA',
            'TypeScript',
            'Material Design',
            'PWA Preparado',
          ],
          color: 'orange-yellow',
        },
        {
          icon: '⚡',
          title: 'Diseño UI/UX y Creación de Prototipos',
          description:
            'Soluciones completas de diseño usando Figma para wireframes, creación de prototipos y diseños de alta fidelidad antes del desarrollo.',
          features: [
            'Diseños Figma',
            'Experiencia de Usuario',
            'Creación de Prototipos',
            'Sistemas de Diseño',
          ],
          color: 'blue-cyan',
        },
        {
          icon: '🗄️',
          title: 'Desarrollo Backend',
          description:
            'Soluciones robustas de backend con bases de datos modernas e infraestructura cloud para tus apps móviles y web.',
          features: [
            'MySQL',
            'Neo4j',
            'Integración Firebase',
            'Cache Redis',
            'APIs RESTful',
          ],
          color: 'orange-red',
        },
        {
          icon: '☁️',
          title: 'Despliegue en la Nube',
          description:
            'Despliegue y gestión escalable de apps usando Google Cloud Platform con integración continua.',
          features: [
            'Integración GCP',
            'Despliegue en Tiendas',
            'Monitoreo de Rendimiento',
            'Autoescalado',
          ],
          color: 'blue-indigo',
        },
        {
          icon: '🌐',
          title: 'Desarrollo WordPress',
          description:
            'Sitios web y soluciones e-commerce en WordPress económicos para clientes que necesitan soluciones rápidas y económicas.',
          features: [
            'Temas Personalizados',
            'WooCommerce',
            'Optimización SEO',
            'Económico',
          ],
          color: 'yellow-orange',
        },
      ],
    },
    gl: {
      sectionTitle: {
        main: 'Desenvolvemento de Apps',
        highlight: 'Servizos',
      },
      description:
        'Especializados en desenvolvemento de aplicacións móbiles híbridas e aplicacións web modernas. Dende o deseño ata o lanzamento, creamos solucións multiplataforma que funcionan en todas partes.',
      whyChoose: 'Por que escoller',
      whyChooseHighlight: 'Apps Híbridas',
      benefits: [
        {
          icon: '💰',
          title: 'Económico',
          desc: 'Unha base de código única para múltiples plataformas reduce o tempo e custo de desenvolvemento ata un 60%',
        },
        {
          icon: '⚡',
          title: 'Desenvolvemento Rápido',
          desc: 'Lanzamento rápido en iOS e Android con código compartido e actualizacións máis rápidas',
        },
        {
          icon: '🔧',
          title: 'Mantemento Doado',
          desc: 'Unha base de código única facilita actualizacións, corrección de erros e implementación de funcionalidades',
        },
      ],
      services: [
        {
          icon: '📱',
          title: 'Desenvolvemento de Apps Móbiles Híbridas',
          description:
            'Apps móbiles multiplataforma con rendemento nativo usando Ionic, Capacitor e Cordova. Unha base de código, múltiples plataformas.',
          features: [
            'iOS e Android',
            'Base de Código Única',
            'Rendemento Nativo',
            'Rendible',
          ],
          color: 'blue-orange',
        },
        {
          icon: '💻',
          title: 'Aplicacións Angular',
          description:
            'Aplicacións Angular de nivel empresarial con arquitectura moderna, perfectas para web e plataformas móbiles.',
          features: [
            'Desenvolvemento SPA',
            'TypeScript',
            'Material Design',
            'PWA Preparado',
          ],
          color: 'orange-yellow',
        },
        {
          icon: '⚡',
          title: 'Deseño UI/UX e Creación de Prototipos',
          description:
            'Solucións completas de deseño usando Figma para wireframes, creación de prototipos e deseños de alta fidelidade antes do desenvolvemento.',
          features: [
            'Deseños Figma',
            'Experiencia de Usuario',
            'Creación de Prototipos',
            'Sistemas de Deseño',
          ],
          color: 'blue-cyan',
        },
        {
          icon: '🗄️',
          title: 'Desenvolvemento Backend',
          description:
            'Solucións robustas de backend con bases de datos modernas e infraestrutura cloud para as túas apps móbiles e web.',
          features: [
            'MySQL',
            'Neo4j',
            'Integración Firebase',
            'Cache Redis',
            'APIs RESTful',
          ],
          color: 'orange-red',
        },
        {
          icon: '☁️',
          title: 'Desprego na Nube',
          description:
            'Desprego e xestión escalable de apps usando Google Cloud Platform con integración continua.',
          features: [
            'Integración GCP',
            'Desprego en Tendas',
            'Monitoraxe de Rendemento',
            'Autoescalado',
          ],
          color: 'blue-indigo',
        },
        {
          icon: '🌐',
          title: 'Desenvolvemento WordPress',
          description:
            'Sitios web e solucións e-commerce en WordPress económicos para clientes que necesitan solucións rápidas e rendibles.',
          features: [
            'Temas Personalizados',
            'WooCommerce',
            'Optimización SEO',
            'Económico',
          ],
          color: 'yellow-orange',
        },
      ],
    },
  };

  constructor(private langService: LanguageService) {
    // subscribe to the language observable just like in HeroComponent
    this.langService.lang$.subscribe((l) => {
      this.lang = l;
    });
  }
}
