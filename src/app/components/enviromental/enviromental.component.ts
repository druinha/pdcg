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
        {
          title: 'Green Web & App Development',
          desc: 'We build efficient websites and applications that reduce data load and server energy consumption.',
        },
        {
          title: 'Eco-Friendly Hosting Providers',
          desc: 'We use hosting providers and data centers powered by renewable energy and optimized for low energy use.',
        },
        {
          title: 'Device Recycling & Responsible Procurement',
          desc: 'We extend device lifespan and recycle electronics responsibly while choosing partners aligned with sustainability.',
        },
      ],
      es: [
        {
          title: 'Huella de Carbono Reducida',
          desc: 'Al trabajar de forma remota, evitamos emisiones por desplazamientos y oficinas físicas.',
        },
        {
          title: 'Uso Eficiente de Energía',
          desc: 'Usamos dispositivos eficientes y optimizamos el consumo eléctrico en todas las operaciones.',
        },
        {
          title: 'Modelo Sin Papel',
          desc: 'Todos los procesos y documentación son digitales, reduciendo el uso innecesario de papel.',
        },
        {
          title: 'Almacenamiento en la Nube Verde',
          desc: 'Confiamos en proveedores cloud que aplican políticas eficientes y energías renovables.',
        },
        {
          title: 'Modelo Remoto Sostenible',
          desc: 'Apoyamos un modelo de negocio responsable que minimiza nuestro impacto ambiental.',
        },
        {
          title: 'Desarrollo Web y App Ecológico',
          desc: 'Creamos sitios y apps optimizados que reducen la carga de datos y el consumo energético.',
        },
        {
          title: 'Proveedores de Hosting Sostenible',
          desc: 'Utilizamos servidores con energía renovable y centros de datos de bajo consumo.',
        },
        {
          title: 'Reciclaje y Compra Responsable de Dispositivos',
          desc: 'Prolongamos la vida útil de los dispositivos y reciclamos electrónicamente con responsabilidad.',
        },
      ],
      gl: [
        {
          title: 'Pegada de Carbono Reducida',
          desc: 'Ao traballar en remoto evitamos emisións por desprazamentos e infraestruturas físicas.',
        },
        {
          title: 'Uso Eficiente da Enerxía',
          desc: 'Empregamos dispositivos eficientes e optimizamos o consumo eléctrico en todas as operacións.',
        },
        {
          title: 'Modelo Sen Papel',
          desc: 'Toda a documentación e os procesos son dixitais, reducindo o uso innecesario de papel.',
        },
        {
          title: 'Nube con Provedores Verdes',
          desc: 'Usamos servizos cloud de provedores con políticas sostibles e enerxías renovables.',
        },
        {
          title: 'Modelo Remoto Sustentable',
          desc: 'Promovemos un modelo tecnolóxico responsable e cun impacto ambiental mínimo.',
        },
        {
          title: 'Desenvolvemento Web e App Verde',
          desc: 'Construímos webs e apps lixeiras que reducen o tráfico e o consumo enerxético dos servidores.',
        },
        {
          title: 'Provedores de Hosting Ecolóxicos',
          desc: 'Usamos centros de datos que empregan enerxía renovable e están optimizados para aforro enerxético.',
        },
        {
          title: 'Reciclaxe e Compra Responsable de Dispositivos',
          desc: 'Prolongamos a vida útil dos equipos e reciclamos o material electrónico de forma responsable.',
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
