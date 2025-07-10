import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-consulting',
  imports: [CommonModule],
  templateUrl: './consulting.component.html',
  styleUrl: './consulting.component.scss',
})
export class ConsultingComponent {
  lang: 'en' | 'es' | 'gl' = 'en';

  services = [
    {
      title: 'Consulting',
      description:
        'We offer expert consulting services to help you navigate the complexities of software development, from project planning to execution.',
      image: '../../../assets/companiesImages/consulting.png',
      tech: ['Agile', 'Scrum', 'DevOps', 'Project Management'],
      category: 'Consulting Services',
      live: '',
      code: '',
    },
  ];

  translations = {
    en: {
      sectionTitle: 'Consulting',
      sectionHighlight: 'Services',
      sectionDescription:
        'Expertise to boost your app, improve your business workflow, or structure your startup’s growth.',

      techConsultingTitle: 'Tech & App Consulting',
      techConsultingDescription:
        'For tech companies, developers, and product teams who want better performance, structure, and code quality.',
      techConsultingFeatures: [
        'Code audits & architecture advice',
        'Performance & UX improvements',
        'Deployment & scalability consulting',
        'API/backend optimization',
      ],

      businessConsultingTitle: 'Business Workflow Consulting',
      businessConsultingDescription:
        'For local businesses like cleaning services, spas, or hotels looking to optimize their daily operations.',
      businessConsultingFeatures: [
        'Shift planning & scheduling',
        'Expense control & cost cutting',
        'Digital tools & automations',
        'Process improvement',
      ],

      productPlanningTitle: 'Product Planning & Agile Coaching',
      productPlanningDescription:
        'Ideal for startups or internal teams that need better structure, prioritization, and agile methodology.',
      productPlanningFeatures: [
        'Roadmap & MVP definition',
        'Agile & Scrum training',
        'Team workflow optimization',
        'Prioritization frameworks',
      ],

      contactTitle: 'Interested in any of these services?',
      contactDescription:
        'Contact us to discuss your needs and receive a personalized proposal.',
      contactButton: 'Request Consulting',

      trustedBy: 'Companies Who Trusted Us',

      // Names for logos
      niquitaName: 'Niquita Rengøring',
      happyFeetName: 'Happy Feet Rengøring',
      socialVibesName: 'SocialVibes',
      samadhiName: 'Samadhi Spa',
      vidaName: 'Vida Massage',
      sanAntonioName: 'DB San Antonio Hotel',
    },
    es: {
      sectionTitle: 'Consultoría',
      sectionHighlight: 'Servicios',
      sectionDescription:
        'Experiencia para potenciar tu aplicación, mejorar el flujo de trabajo de tu negocio o estructurar el crecimiento de tu startup.',

      techConsultingTitle: 'Consultoría Técnica y de Apps',
      techConsultingDescription:
        'Para empresas tecnológicas, desarrolladores y equipos de producto que buscan mejor rendimiento, estructura y calidad de código.',
      techConsultingFeatures: [
        'Auditorías de código y asesoría en arquitectura',
        'Mejoras de rendimiento y UX',
        'Consultoría de despliegue y escalabilidad',
        'Optimización API/backend',
      ],

      businessConsultingTitle: 'Consultoría de Flujo de Trabajo Empresarial',
      businessConsultingDescription:
        'Para negocios locales como servicios de limpieza, spas u hoteles que buscan optimizar sus operaciones diarias.',
      businessConsultingFeatures: [
        'Planificación y programación de turnos',
        'Control de gastos y reducción de costes',
        'Herramientas digitales y automatizaciones',
        'Mejora de procesos',
      ],

      productPlanningTitle: 'Planificación de Producto y Coaching Agile',
      productPlanningDescription:
        'Ideal para startups o equipos internos que necesitan mejor estructura, priorización y metodología agile.',
      productPlanningFeatures: [
        'Definición de roadmap y MVP',
        'Formación Agile y Scrum',
        'Optimización del flujo de trabajo del equipo',
        'Frameworks de priorización',
      ],

      contactTitle: '¿Interesado en alguno de estos servicios?',
      contactDescription:
        'Contáctanos para discutir tus necesidades y recibir una propuesta personalizada.',
      contactButton: 'Solicitar Consultoría',

      trustedBy: 'Empresas que confiaron en nosotros',

      niquitaName: 'Niquita Rengøring',
      happyFeetName: 'Happy Feet Rengøring',
      socialVibesName: 'SocialVibes',
      samadhiName: 'Samadhi Spa',
      vidaName: 'Vida Massage',
      sanAntonioName: 'DB San Antonio Hotel',
    },
    gl: {
      sectionTitle: 'Consultoría',
      sectionHighlight: 'Servizos',
      sectionDescription:
        'Experiencia para potenciar a túa aplicación, mellorar o fluxo de traballo do teu negocio ou estruturar o crecemento da túa startup.',

      techConsultingTitle: 'Consultoría Técnica e de Apps',
      techConsultingDescription:
        'Para empresas tecnolóxicas, desenvolvedores e equipos de produto que buscan mellor rendemento, estrutura e calidade de código.',
      techConsultingFeatures: [
        'Auditorías de código e asesoramento en arquitectura',
        'Melloras de rendemento e UX',
        'Consultoría de despregue e escalabilidade',
        'Optimización API/backend',
      ],

      businessConsultingTitle: 'Consultoría de Fluxo de Traballo Empresarial',
      businessConsultingDescription:
        'Para negocios locais como servizos de limpeza, spas ou hoteis que buscan optimizar as súas operacións diarias.',
      businessConsultingFeatures: [
        'Planificación e programación de quendas',
        'Control de gastos e reducción de custos',
        'Ferramentas dixitais e automatizacións',
        'Mellora de procesos',
      ],

      productPlanningTitle: 'Planificación de Produto e Coaching Agile',
      productPlanningDescription:
        'Ideal para startups ou equipos internos que necesitan mellor estrutura, priorización e metodoloxía agile.',
      productPlanningFeatures: [
        'Definición de roadmap e MVP',
        'Formación Agile e Scrum',
        'Optimización do fluxo de traballo do equipo',
        'Frameworks de priorización',
      ],

      contactTitle: 'Interesado en algunha destes servizos?',
      contactDescription:
        'Contacta connosco para discutir as túas necesidades e recibir unha proposta personalizada.',
      contactButton: 'Solicitar Consultoría',

      trustedBy: 'Empresas que confiaron en nós',

      niquitaName: 'Niquita Rengøring',
      happyFeetName: 'Happy Feet Rengøring',
      socialVibesName: 'SocialVibes',
      samadhiName: 'Samadhi Spa',
      vidaName: 'Vida Massage',
      sanAntonioName: 'DB San Antonio Hotel',
    },
  };

  constructor(private langService: LanguageService) {
    this.langService.lang$.subscribe((l) => {
      this.lang = l;
    });
  }
}
