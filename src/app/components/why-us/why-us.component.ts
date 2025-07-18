import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-why-us',
  imports: [CommonModule],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss',
})
export class WhyUsComponent {
  lang: 'en' | 'es' | 'gl' = 'en';

  translations = {
    why: {
      title: {
        en: 'Why Choose PDCG?',
        es: '¿Por qué elegir PDCG?',
        gl: 'Por que escoller PDCG?',
      },
      features: [
        {
          icon: '⚙️',
          title: {
            en: 'Tailored Solutions, Not Templates',
            es: 'Soluciones a Medida, No Plantillas',
            gl: 'Solucións Personalizadas, Non Plantillas',
          },
          text: {
            en: 'While many competitors offer rigid, pre-packaged solutions, we focus on custom development aligned with your specific business needs — no generic one-size-fits-all.',
            es: 'Mientras muchos competidores ofrecen soluciones rígidas y predefinidas, nosotros apostamos por el desarrollo personalizado, alineado con las necesidades específicas de tu negocio.',
            gl: 'Mentres moitos competidores ofrecen solucións ríxidas e predefinidas, nós apostamos polo desenvolvemento personalizado, adaptado ás necesidades específicas do teu negocio.',
          },
        },
        {
          icon: '🚀',
          title: {
            en: 'Modern Tech Stack for Scalable Results',
            es: 'Tecnologías Modernas para Resultados Escalables',
            gl: 'Tecnoloxías Modernas para Resultados Escalables',
          },
          text: {
            en: 'We work with the latest technologies like Angular, Ionic, Google Cloud, and AWS, ensuring high-performance, secure, and scalable applications.',
            es: 'Trabajamos con tecnologías como Angular, Ionic, Google Cloud y AWS, garantizando aplicaciones seguras, escalables y de alto rendimiento.',
            gl: 'Traballamos con tecnoloxías como Angular, Ionic, Google Cloud e AWS, garantindo aplicacións seguras, escalables e de alto rendemento.',
          },
        },
        {
          icon: '🌍',
          title: {
            en: 'Multiplatform Apps with Hybrid Development',
            es: 'Apps Multiplataforma con Desarrollo Híbrido',
            gl: 'Apps Multiplataforma con Desenvolvemento Híbrido',
          },
          text: {
            en: 'Our specialization in hybrid mobile apps allows us to develop once and deploy across iOS, Android, and the web — saving time and reducing cost without sacrificing quality.',
            es: 'Nuestra especialización en apps móviles híbridas permite desarrollar una sola vez y lanzar en iOS, Android y web, ahorrando tiempo y reduciendo costes sin perder calidad.',
            gl: 'A nosa especialización en apps móbiles híbridas permite desenvolver unha vez e lanzar en iOS, Android e web, aforrando tempo e reducindo custos sen perder calidade.',
          },
        },
        {
          icon: '📈',
          title: {
            en: 'Agile, Fast & Efficient',
            es: 'Ágiles, Rápidos y Eficientes',
            gl: 'Áxiles, Rápidos e Eficientes',
          },
          text: {
            en: 'With an agile mindset, we deliver results quickly and iterate based on your feedback. You get rapid deployment, frequent updates, and a smooth development process.',
            es: 'Con una mentalidad ágil, entregamos resultados rápidamente e iteramos según tu feedback. Despliegues rápidos, actualizaciones frecuentes y un proceso fluido.',
            gl: 'Cunha mentalidade áxil, entregamos resultados rapidamente e iteramos segundo o teu feedback. Despregues rápidos, actualizacións frecuentes e un proceso fluído.',
          },
        },
        {
          icon: '👨‍💼',
          title: {
            en: 'Trusted by International Clients',
            es: 'Clientes Internacionales que Confían en Nosotros',
            gl: 'Clientes Internacionais que Confían en Nós',
          },
          text: {
            en: 'We’re already developing hybrid apps for clients in Denmark and Sweden, proving our ability to deliver reliable and high-quality solutions internationally.',
            es: 'Ya desarrollamos apps híbridas para clientes en Dinamarca y Suecia, demostrando nuestra capacidad para ofrecer soluciones fiables y de calidad internacional.',
            gl: 'Xa estamos desenvolvendo apps híbridas para clientes de Dinamarca e Suecia, demostrando a nosa capacidade para ofrecer solucións fiables e de calidade internacional.',
          },
        },
        {
          icon: '🌐',
          title: {
            en: 'Affordable and Pan-European Reach',
            es: 'Precios Asequibles y Alcance Europeo',
            gl: 'Prezos Accesibles e Alcance Europeo',
          },
          text: {
            en: 'We offer competitive pricing while serving clients across Europe — from startups to SMEs, agencies looking to outsource, and even enterprise teams needing internal apps.',
            es: 'Ofrecemos precios competitivos y servicios en toda Europa, desde startups y pymes, hasta agencias que necesitan subcontratar o equipos corporativos.',
            gl: 'Ofrecemos prezos competitivos e servizos en toda Europa, desde startups e pemes ata axencias que precisan subcontratar ou equipos corporativos.',
          },
        },
        {
          icon: '🧑‍💻',
          title: {
            en: 'From Entrepreneurs to Enterprises',
            es: 'Desde Emprendedores hasta Empresas',
            gl: 'Dende Emprendedores ata Grandes Empresas',
          },
          text: {
            en: 'Whether you’re a freelancer, local business, marketing agency, or corporate team, we adapt to your workflow and act as your technology partner.',
            es: 'Seas autónomo, negocio local, agencia de marketing o gran empresa, nos adaptamos a tu forma de trabajar y actuamos como tu socio tecnológico.',
            gl: 'Sexas autónomo, empresa local, axencia de márketing ou gran compañía, adaptámonos ao teu fluxo de traballo e actuamos como o teu socio tecnolóxico.',
          },
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
