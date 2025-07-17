import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-solutions',
  imports: [CommonModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss',
})
export class SolutionsComponent {
  lang: 'en' | 'es' | 'gl' = 'en';

  translations = {
    en: {
      solutionsTitleBefore: 'How we',
      solutionsTitleHighlight: 'empower',
      solutionsTitleAfter: 'your business',
      solutionsSubtitle:
        'More than just a technology provider, PDCG is your strategic partner. We design tailor-made solutions that generate efficiency, sustainable value, and real growth opportunities.',

      dataTitle: 'Data Intelligence',
      dataDescription:
        'We turn massive amounts of data into actionable insights. Our analytics and visualization tools help you make informed decisions and anticipate business needs.',

      infraTitle: 'Infrastructure Management',
      infraDescription:
        'We optimize your technology infrastructure from storage to real-time monitoring. We ensure your data is secure, efficient, and accessible, turning it into a competitive advantage.',

      aiTitle: 'Artificial Intelligence',
      aiDescription:
        'We automate processes and forecast trends to boost efficiency. From complex tasks to predictive analytics, our AI solutions create real value across industries.',

      digitalTitle: 'Digital Transformation',
      digitalDescription:
        'We modernize legacy systems using scalable architectures, microservices, and DevOps practices to accelerate processes and foster continuous innovation.',

      cybersecurityTitle: 'Cybersecurity',
      cybersecurityIntro:
        'We protect your digital assets with comprehensive security solutions. We prevent risks and guarantee the integrity, confidentiality, and availability of your critical information.',
      cybersecurityDetails1:
        'We identify and assess potential vulnerabilities through rigorous risk analysis. We detect threats, prioritize risks, and understand your system’s weak points to anticipate attacks. This first step is essential to implement tailored solutions that safeguard your organization’s most valuable asset: its data.',
      cybersecurityDetails2:
        'We apply strategies like Zero Trust and microsegmentation to ensure only authorized users access your critical systems and data. We protect every layer of your organization with advanced controls and specific solutions:',
      cybersecurityList: [
        'Business Security Tool: We manage user access with a Zero Trust platform, ensuring they only access what they need.',
        'Structural security services: We deploy and customize authentication solutions like OAuth2, OIDC, and SSO.',
        'Microsegmentation: We reduce attack surface and prevent lateral movement to protect your most critical assets.',
        'Security control implementation: We configure firewalls, intrusion detection systems, and tailored protection measures.',
        'Education and awareness: We train your employees in best practices to prevent and respond to potential threats.',
      ],
    },

    es: {
      solutionsTitleBefore: 'Cómo',
      solutionsTitleHighlight: 'potenciamos',
      solutionsTitleAfter: 'tu empresa',
      solutionsSubtitle:
        'Más que simples proveedores de tecnología, en PDCG somos tu socio estratégico. Diseñamos soluciones a medida que generan eficiencia, valor sostenible y oportunidades reales de crecimiento.',
      dataTitle: 'Inteligencia de Datos',
      dataDescription:
        'Convertimos grandes volúmenes de datos en información valiosa y accionable. Nuestras herramientas de análisis y visualización te ayudan a tomar decisiones informadas y anticiparte a las necesidades del negocio.',

      infraTitle: 'Gestión de Infraestructura',
      infraDescription:
        'Optimizamos tu infraestructura tecnológica desde el almacenamiento hasta la monitorización en tiempo real. Garantizamos que tus datos sean seguros, eficientes y accesibles, convirtiéndolos en una ventaja competitiva.',

      aiTitle: 'Inteligencia Artificial',
      aiDescription:
        'Automatizamos procesos y predecimos tendencias para mejorar la eficiencia. Desde tareas complejas hasta análisis predictivos, nuestras soluciones de IA generan valor real en diversos sectores.',

      digitalTitle: 'Transformación Digital',
      digitalDescription:
        'Modernizamos sistemas heredados utilizando arquitecturas escalables, microservicios y prácticas DevOps que aceleran procesos e impulsan la innovación continua.',

      cybersecurityTitle: 'Ciberseguridad',
      cybersecurityIntro:
        'Protegemos tus activos digitales con soluciones integrales de seguridad. Prevenimos riesgos y garantizamos la integridad, confidencialidad y disponibilidad de tu información crítica.',
      cybersecurityDetails1:
        'Identificamos y evaluamos posibles vulnerabilidades mediante una rigurosa evaluación de riesgos. Detectamos amenazas, priorizamos los riesgos y entendemos los puntos débiles de tus sistemas para anticipar posibles ataques. Este primer paso es esencial para implementar soluciones personalizadas que protejan lo más valioso de tu organización: tus datos.',
      cybersecurityDetails2:
        'Aplicamos estrategias como Zero Trust y microsegmentación para garantizar que solo los usuarios autorizados accedan a tus sistemas y datos críticos. Protegemos cada capa de tu organización con controles avanzados y soluciones específicas:',
      cybersecurityList: [
        'Business Security Tool: Gestionamos el acceso de los usuarios mediante una plataforma Zero Trust, asegurando que solo acceden a la información necesaria.',
        'Servicios de seguridad estructural: Desplegamos y personalizamos soluciones de autenticación como OAuth2, OIDC y SSO.',
        'Microsegmentación: Reducimos la superficie de ataque y evitamos movimientos laterales para proteger tus activos más críticos.',
        'Implementación de controles de seguridad: Configuramos cortafuegos, sistemas de detección de intrusiones y medidas de protección adaptadas a tus necesidades.',
        'Educación y concienciación: Formamos a tus empleados en prácticas seguras para prevenir y enfrentar posibles amenazas.',
      ],
    },

    gl: {
      solutionsTitleBefore: 'Como',
      solutionsTitleHighlight: 'potenciamos',
      solutionsTitleAfter: 'a túa empresa',
      solutionsSubtitle:
        'En PDCG non somos só un provedor tecnolóxico: somos o teu socio estratéxico. Deseñamos solucións a medida que xeran eficiencia, valor sostible e oportunidades reais de crecemento.',
      dataTitle: 'Intelixencia de Datos',
      dataDescription:
        'Transformamos grandes volumes de datos en coñecemento útil. As nosas ferramentas de análise e visualización axúdanche a tomar decisións informadas e anticiparte ás necesidades do teu negocio.',

      infraTitle: 'Xestión de Infraestruturas',
      infraDescription:
        'Optimizamos a túa infraestrutura tecnolóxica, dende o almacenamento ata a monitorización en tempo real. Aseguramos que os teus datos sexan seguros, eficientes e accesibles, converténdose nunha vantaxe competitiva.',

      aiTitle: 'Intelixencia Artificial',
      aiDescription:
        'Automatizamos procesos e prevemos tendencias para mellorar a eficiencia. Desde tarefas complexas ata análise preditiva, as nosas solucións de IA achegan valor real en múltiples sectores.',

      digitalTitle: 'Transformación Dixital',
      digitalDescription:
        'Modernizamos sistemas herdados con arquitecturas escalables, microservizos e prácticas DevOps que aceleran procesos e impulsan a innovación continua.',

      cybersecurityTitle: 'Ciberseguridade',
      cybersecurityIntro:
        'Protexemos os teus activos dixitais con solucións integrais de seguridade. Previñimos riscos e garantimos a integridade, confidencialidade e dispoñibilidade da túa información crítica.',
      cybersecurityDetails1:
        'Identificamos e avaliamos vulnerabilidades potenciais cunha análise de riscos rigorosa. Detectamos ameazas, priorizamos riscos e comprendemos os puntos débiles dos teus sistemas para anticipar posibles ataques. Este primeiro paso é esencial para implementar solucións personalizadas que protexan o máis valioso da túa organización: os datos.',
      cybersecurityDetails2:
        'Aplicamos estratexias como Zero Trust e microsegmentación para garantir que só os usuarios autorizados accedan aos teus sistemas e datos críticos. Protexemos cada capa da túa organización con controis avanzados e solucións específicas:',
      cybersecurityList: [
        'Business Security Tool: Xestionamos o acceso dos usuarios cunha plataforma Zero Trust, garantindo que só accedan ao necesario.',
        'Servizos de seguridade estrutural: Despregamos e personalizamos solucións de autenticación como OAuth2, OIDC e SSO.',
        'Microsegmentación: Reducimos a superficie de ataque e evitamos movementos laterais para protexer os teus activos máis críticos.',
        'Implementación de controis de seguridade: Configuramos cortalumes, sistemas de detección de intrusións e medidas de protección adaptadas ás túas necesidades.',
        'Educación e concienciación: Formamos ao teu equipo en boas prácticas para previr e responder a ameazas potenciais.',
      ],
    },
  };

  constructor(private router: Router, private langService: LanguageService) {
    this.langService.lang$.subscribe((l) => {
      this.lang = l;
    });
  }

  goToConsulting() {
    console.log('Navigating to consulting contact form');
    this.router.navigate(['/contact-consulting']);
  }
}
