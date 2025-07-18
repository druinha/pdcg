import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-enviromental',
  imports: [CommonModule],
  templateUrl: './enviromental.component.html',
  styleUrl: './enviromental.component.scss',
})
export class EnviromentalComponent {
  lang: 'en' | 'es' | 'gl' = 'en';

  translations = {
    title: {
      en: 'Our',
      es: 'Nuestro',
      gl: 'A nosa',
    },
    highlight: {
      en: 'Environmental Commitment',
      es: 'Compromiso Ambiental',
      gl: 'Aposta Ambiental',
    },
    description: {
      en: 'We are committed to minimizing environmental impact through sustainable remote work practices and efficient technology use.',
      es: 'Estamos comprometidos con minimizar el impacto ambiental mediante prácticas sostenibles de trabajo remoto y un uso eficiente de la tecnología.',
      gl: 'Estamos comprometidos coa minimización do impacto ambiental a través dun modelo sostible de traballo remoto e un uso eficiente da tecnoloxía.',
    },
    measures: {
      en: [
        {
          title: 'Reduced Carbon Footprint',
          desc: 'By working remotely, we avoid emissions from commuting and physical office infrastructure.',
        },
        {
          title: 'Efficient Energy Use',
          desc: 'We use energy-efficient devices and optimize electricity consumption across all operations.',
        },
        {
          title: 'Paperless Model',
          desc: 'All documentation and work processes are digital, reducing unnecessary paper use.',
        },
        {
          title: 'Cloud Storage with Green Providers',
          desc: 'We rely on cloud services from providers that apply energy-efficient policies and renewable energy sources.',
        },
        {
          title: 'Sustainable Remote Model',
          desc: 'We support a sustainable business model that promotes responsible tech practices and minimizes our ecological footprint.',
        },
      ],
      es: [
        {
          title: 'Reducción de la huella de carbono',
          desc: 'Al trabajar de forma remota evitamos emisiones derivadas del transporte y de infraestructuras físicas.',
        },
        {
          title: 'Uso eficiente de la energía',
          desc: 'Utilizamos dispositivos energéticamente eficientes y optimizamos el consumo eléctrico en todas nuestras operaciones.',
        },
        {
          title: 'Modelo sin papel',
          desc: 'Toda la documentación y los procesos de trabajo se gestionan digitalmente, reduciendo el uso innecesario de papel.',
        },
        {
          title: 'Almacenamiento en la nube sostenible',
          desc: 'Usamos servicios en la nube de proveedores que aplican políticas energéticas sostenibles y recurren a fuentes renovables.',
        },
        {
          title: 'Modelo remoto sostenible',
          desc: 'Apoyamos un modelo empresarial sostenible que promueve un uso responsable de la tecnología y minimiza el impacto ecológico.',
        },
      ],
      gl: [
        {
          title: 'Redución da pegada de carbono',
          desc: 'Ao traballar en remoto evitamos emisións derivadas do transporte e do uso de infraestruturas físicas.',
        },
        {
          title: 'Uso eficiente da enerxía',
          desc: 'Empregamos dispositivos de alta eficiencia enerxética e optimizamos o consumo eléctrico nas nosas operacións.',
        },
        {
          title: 'Modelo sen papel',
          desc: 'Toda a documentación e procesos de traballo xestiónanse de forma dixital, reducindo o uso innecesario de papel.',
        },
        {
          title: 'Almacenamento en nube sostible',
          desc: 'Usamos servizos de almacenamento en nube de provedores que aplican políticas de eficiencia enerxética e uso de enerxías renovables.',
        },
        {
          title: 'Modelo remoto sostible',
          desc: 'Apostamos por un modelo empresarial sostible que promove un uso responsable da tecnoloxía e minimiza o impacto ecolóxico.',
        },
      ],
    },
  };

  constructor(public langService: LanguageService) {
    this.langService.lang$.subscribe((l) => {
      this.lang = l;
    });
  }
}
