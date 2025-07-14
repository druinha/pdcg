import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent {
  lang: 'en' | 'es' | 'gl' = 'en';

  translations = {
    en: {
      sectionTitle: 'Transparent Pricing',
      sectionDesc:
        'Smart service options to match your project and your pocket',

      webTitle: '🌐 Web Development',
      webPlans: [
        {
          name: 'Simple Website',
          subtitle: 'Single page with smooth navigation',
          prices: [
            {
              label: 'WordPress',
              price: '€400',
              note: '€30/month maintenance',
            },
            {
              label: 'Angular',
              price: '€600',
              note: '€30/month maintenance',
            },
          ],
          features: [
            'Contact form',
            'Integrated blog',
            'Payment button (+€150)',
          ],
          highlight: false,
        },
        {
          name: 'Intermediate Website',
          subtitle: 'Multiple pages with transitions',
          prices: [
            {
              label: 'WordPress',
              price: '€650',
              note: '€50/month maintenance',
            },
            {
              label: 'Angular',
              price: '€850',
              note: '€50/month maintenance',
            },
          ],
          features: [
            'Everything above +',
            'Integrated booking system',
            'User login/registration',
            'Database included',
          ],
          highlight: true,
          highlightLabel: 'Most Popular',
        },
        {
          name: 'Advanced Website',
          subtitle: 'Complete web application',
          prices: [
            {
              label: 'WordPress',
              price: 'from €1,000',
              note: '€100-300/month',
            },
            {
              label: 'Angular',
              price: 'from €1,350',
              note: '€100-300/month',
            },
          ],
          features: [
            'Complete e-commerce',
            'Integrated CRM',
            'Admin panel',
            'API integrations',
          ],
          highlight: false,
        },
      ],

      appTitle: '📱 Hybrid App Development',
      appPlans: [
        {
          name: 'Simple App',
          subtitle: '4-6 weeks development',
          prices: [
            { label: '', price: 'from €2,000', note: 'can scale up to €6,000' },
            { label: '', price: '', note: 'Maintenance: from €100/month' },
          ],
          features: [
            'Welcome screen',
            'Basic user system',
            'Local/remote database',
            'Basic forms',
            'Payment gateway (+€500-1000)',
          ],
          highlight: false,
        },
        {
          name: 'Intermediate App',
          subtitle: '6-8 weeks development',
          prices: [
            {
              label: '',
              price: 'from €6,000',
              note: 'Maintenance: €200-400/month',
            },
          ],
          features: [
            'Everything above +',
            'Google/Facebook login',
            'Real-time chat',
            'Filters and search',
            'API integrations',
          ],
          highlight: true,
          highlightLabel: 'Recommended',
        },
        {
          name: 'Advanced App',
          subtitle: '10-12+ weeks development',
          prices: [
            {
              label: '',
              price: '€10,000 - €25,000',
              note: 'Maintenance: €250-400/month',
            },
          ],
          features: [
            'Completely custom UI/UX',
            'Admin panel',
            'Geolocation, AR',
            'Recommendation engine',
            'Integrated analytics',
          ],
          highlight: false,
        },
      ],

      ctaTitle: 'Ready to get started?',
      ctaDesc: 'Contact us to discuss your needs and get a personalized quote.',
      ctaButton: 'Request a Quote',
    },

    es: {
      sectionTitle: 'Precios Transparentes',
      sectionDesc:
        'Opciones de servicio inteligentes que se adaptan a tu proyecto y a tu presupuesto',

      webTitle: '🌐 Desarrollo Web',
      webPlans: [
        {
          name: 'Página Simple',
          subtitle: 'Página única con navegación fluida',
          prices: [
            {
              label: 'WordPress',
              price: '€400',
              note: '€30/mes mantenimiento',
            },
            {
              label: 'Angular',
              price: '€600',
              note: '€30/mes mantenimiento',
            },
          ],
          features: [
            'Formulario de contacto',
            'Blog integrado',
            'Botón de pago (+€150)',
          ],
          highlight: false,
        },
        {
          name: 'Página Intermedia',
          subtitle: 'Múltiples páginas con transiciones',
          prices: [
            {
              label: 'WordPress',
              price: '€650',
              note: '€50/mes mantenimiento',
            },
            {
              label: 'Angular',
              price: '€850',
              note: '€50/mes mantenimiento',
            },
          ],
          features: [
            'Todo lo anterior +',
            'Sistema de reservas integrado',
            'Inicio de sesión/registro de usuarios',
            'Base de datos incluida',
          ],
          highlight: true,
          highlightLabel: 'Más Popular',
        },
        {
          name: 'Página Avanzada',
          subtitle: 'Aplicación web completa',
          prices: [
            {
              label: 'WordPress',
              price: 'desde €1,000',
              note: '€100-300/mes',
            },
            { label: 'Angular', price: 'desde €1,350', note: '€100-300/mes' },
          ],
          features: [
            'E-commerce completo',
            'CRM integrado',
            'Panel de administración',
            'Integraciones API',
          ],
          highlight: false,
        },
      ],

      appTitle: '📱 Desarrollo de Apps Híbridas',
      appPlans: [
        {
          name: 'App Simple',
          subtitle: '4-6 semanas de desarrollo',
          prices: [
            {
              label: '',
              price: 'desde €2,000',
              note: 'puede escalar hasta €6,000',
            },
            { label: '', price: '', note: 'Mantenimiento: desde €100/mes' },
          ],
          features: [
            'Pantalla de bienvenida',
            'Sistema básico de usuarios',
            'Base de datos local/remota',
            'Formularios básicos',
            'Pasarela de pago (+€500-1000)',
          ],
          highlight: false,
        },
        {
          name: 'App Intermedia',
          subtitle: '6-8 semanas de desarrollo',
          prices: [
            {
              label: '',
              price: 'desde €6,000',
              note: 'Mantenimiento: €200-400/mes',
            },
          ],
          features: [
            'Todo lo anterior +',
            'Inicio de sesión Google/Facebook',
            'Chat en tiempo real',
            'Filtros y búsqueda',
            'Integraciones API',
          ],
          highlight: true,
          highlightLabel: 'Recomendada',
        },
        {
          name: 'App Avanzada',
          subtitle: '10-12+ semanas de desarrollo',
          prices: [
            {
              label: '',
              price: '€10,000 - €25,000',
              note: 'Mantenimiento: €250-400/mes',
            },
          ],
          features: [
            'UI/UX completamente personalizada',
            'Panel de administración',
            'Geolocalización, RA',
            'Motor de recomendaciones',
            'Analíticas integradas',
          ],
          highlight: false,
        },
      ],

      ctaTitle: '¿Listo para comenzar?',
      ctaDesc:
        'Contáctanos para discutir tus necesidades y obtener un presupuesto personalizado.',
      ctaButton: 'Solicitar Presupuesto',
    },

    gl: {
      sectionTitle: 'Prezos Transparentes',
      sectionDesc:
        'Opcións de servizo intelixentes que se adaptan ao teu proxecto e ao teu presuposto',

      webTitle: '🌐 Desenvolvemento Web',
      webPlans: [
        {
          name: 'Páxina Sinxela',
          subtitle: 'Páxina única con navegación fluída',
          prices: [
            { label: 'WordPress', price: '€400', note: '+ €30/mes mantemento' },
            { label: 'Angular', price: '€600', note: '+ €30/mes mantemento' },
          ],
          features: [
            'Formulario de contacto',
            'Blog integrado',
            'Botón de pago (+€150)',
          ],
          highlight: false,
        },
        {
          name: 'Páxina Intermedia',
          subtitle: 'Múltiples páxinas con transicións',
          prices: [
            { label: 'WordPress', price: '€650', note: '+ €50/mes mantemento' },
            { label: 'Angular', price: '€850', note: '+ €50/mes mantemento' },
          ],
          features: [
            'Todo o anterior +',
            'Sistema de reservas integrado',
            'Inicio de sesión/registro de usuarios',
            'Base de datos incluída',
          ],
          highlight: true,
          highlightLabel: 'O máis popular',
        },
        {
          name: 'Páxina Avanzada',
          subtitle: 'Aplicación web completa',
          prices: [
            {
              label: 'WordPress',
              price: 'desde €1,000',
              note: '+ €100-300/mes',
            },
            { label: 'Angular', price: 'desde €1,350', note: '+ €100-300/mes' },
          ],
          features: [
            'E-commerce completo',
            'CRM integrado',
            'Panel de administración',
            'Integracións API',
          ],
          highlight: false,
        },
      ],

      appTitle: '📱 Desenvolvemento de Apps Híbridas',
      appPlans: [
        {
          name: 'App Simple',
          subtitle: '4-6 semanas de desenvolvemento',
          prices: [
            {
              label: '',
              price: 'desde €2,000',
              note: 'pode escalar ata €6,000',
            },
            { label: '', price: '', note: 'Mantemento: desde €100/mes' },
          ],
          features: [
            'Pantalla de benvida',
            'Sistema básico de usuarios',
            'Base de datos local/remota',
            'Formularios básicos',
            'Pasarela de pago (+€500-1000)',
          ],
          highlight: false,
        },
        {
          name: 'App Intermedia',
          subtitle: '6-8 semanas de desenvolvemento',
          prices: [
            {
              label: '',
              price: 'desde €6,000',
              note: 'Mantemento: €200-400/mes',
            },
          ],
          features: [
            'Todo o anterior +',
            'Inicio de sesión Google/Facebook',
            'Chat en tempo real',
            'Filtros e busca',
            'Integracións API',
          ],
          highlight: true,
          highlightLabel: 'Recomendada',
        },
        {
          name: 'App Avanzada',
          subtitle: '10-12+ semanas de desenvolvemento',
          prices: [
            {
              label: '',
              price: '€10,000 - €25,000',
              note: 'Mantemento: €250-400/mes',
            },
          ],
          features: [
            'UI/UX completamente personalizada',
            'Panel de administración',
            'Xeolocalización, RA',
            'Motor de recomendacións',
            'Analíticas integradas',
          ],
          highlight: false,
        },
      ],

      ctaTitle: 'Listo para comezar?',
      ctaDesc:
        'Contacta connosco para discutir as túas necesidades e obter un orzamento personalizado.',
      ctaButton: 'Solicitar Orzamento',
    },
  };

  constructor(private langService: LanguageService, private router: Router) {
    this.langService.lang$.subscribe((l) => {
      this.lang = l;
    });
  }

  goAppWebForm() {
    console.log('Navigating to web app contact form');
    this.router.navigate(['/contact-webapp']);
  }
}
